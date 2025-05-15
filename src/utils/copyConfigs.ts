import fs from "fs";
import path from "path";

export function copyConfigs() {
  const sourcePath = path.resolve(__dirname, "../../templates/jest.config.ts");
  const targetPath = path.resolve(process.cwd(), "jest.config.ts");

  if (!fs.existsSync(sourcePath)) {
    throw new Error(`Arquivo de configuração não encontrado em: ${sourcePath}`);
  }

  fs.copyFileSync(sourcePath, targetPath);
}
