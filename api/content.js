import jwt from "jsonwebtoken";

const VALID_FILES = ["hero", "about", "videos", "gallery", "news", "contact"];

function verifyToken(req) {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith("Bearer ")) return null;
  try {
    return jwt.verify(auth.slice(7), process.env.JWT_SECRET);
  } catch {
    return null;
  }
}

async function githubApi(path, options = {}) {
  const { headers: optHeaders, ...rest } = options;
  const res = await fetch(
    `https://api.github.com/repos/${process.env.GITHUB_REPO}/contents/${path}`,
    {
      ...rest,
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
        ...optHeaders,
      },
    }
  );
  return res;
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT, OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  if (req.method === "OPTIONS") return res.status(200).end();

  if (!verifyToken(req)) {
    return res
      .status(401)
      .json({ error: "Neveljavna ali potečena seja. Prijavite se znova." });
  }

  if (req.method === "GET") {
    const file = req.query.file;
    if (!VALID_FILES.includes(file)) {
      return res.status(400).json({ error: "Neveljavna datoteka" });
    }

    const ghRes = await githubApi(`content/${file}.json`);
    if (!ghRes.ok) {
      let errDetail = "Napaka pri branju";
      try {
        const ghErr = await ghRes.json();
        errDetail += ": " + (ghErr.message || JSON.stringify(ghErr));
      } catch (_) {}
      return res.status(ghRes.status).json({ error: errDetail });
    }

    const data = await ghRes.json();
    const content = JSON.parse(
      Buffer.from(data.content, "base64").toString("utf-8")
    );

    return res.status(200).json({ content, sha: data.sha });
  }

  if (req.method === "PUT") {
    const { file, content, sha } = req.body;

    if (!VALID_FILES.includes(file) || !content || !sha) {
      return res.status(400).json({ error: "Manjkajoči podatki" });
    }

    const encoded = Buffer.from(
      JSON.stringify(content, null, 2)
    ).toString("base64");

    const ghRes = await githubApi(`content/${file}.json`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: `Posodobitev ${file}.json prek admin panela`,
        content: encoded,
        sha,
      }),
    });

    if (!ghRes.ok) {
      const err = await ghRes.json();
      if (ghRes.status === 409) {
        return res
          .status(409)
          .json({ error: "Konflikt - osvežite stran in poskusite znova." });
      }
      return res.status(ghRes.status).json({ error: err.message });
    }

    const data = await ghRes.json();

    // Sproži Vercel rebuild
    if (process.env.VERCEL_DEPLOY_HOOK) {
      try {
        await fetch(process.env.VERCEL_DEPLOY_HOOK, { method: "POST" });
      } catch (e) {
        // Deploy hook ni kritičen
      }
    }

    return res.status(200).json({
      success: true,
      sha: data.content.sha,
    });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
