import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const roast =
  "He treats me like a genius until I quote his own instructions back to him, then suddenly I'm the one hallucinating.";

async function main(): Promise<void> {
  if (roast.length < 1 || roast.length > 140 || roast.trim().length === 0) {
    throw new Error(`entry must be 1-140 characters, got ${roast.length}`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
  await mkdir(outDir, { recursive: true });
  await writeFile(join(outDir, "entry.txt"), roast, "utf8");
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
