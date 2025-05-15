import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import chalk from "chalk";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const templatesDir = path.resolve(__dirname, "../templates");

export const copyConfigs = async (tools: string[]) => {
  const copy = (filename: string) => {
    const src = path.join(templatesDir, filename);
    const dest = path.join(process.cwd(), filename);
    fs.copyFileSync(src, dest);
    console.log(chalk.yellow(`📁 Copiado: ${filename}`));
  };

  if (tools.includes("jest")) copy("jest.config.ts");
  if (tools.includes("cypress")) copy("cypress.config.ts");
  if (tools.includes("testing-library")) copy("test-utils.ts");
};
