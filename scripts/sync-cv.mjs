import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = fileURLToPath(new URL("..", import.meta.url));
const source = resolve(rootDir, "Jaeseong_Ju_CV.pdf");
const target = resolve(rootDir, "public/docs/Jaeseong_Ju_CV.pdf");

if (!existsSync(source)) {
  console.error(`Missing source CV PDF: ${source}`);
  process.exit(1);
}

mkdirSync(dirname(target), { recursive: true });
copyFileSync(source, target);
console.log(`Synced CV PDF to ${target}`);
