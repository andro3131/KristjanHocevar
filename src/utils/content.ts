import fs from "node:fs";
import path from "node:path";

export function loadContent<T>(filename: string): T {
  const filePath = path.join(process.cwd(), "content", `${filename}.json`);
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as T;
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("sl-SI", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
