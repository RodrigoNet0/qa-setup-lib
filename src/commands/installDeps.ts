import { execSync } from "child_process";
import chalk from "chalk";

export const installDeps = async (tools: string[]) => {
  let deps: string[] = [];

  if (tools.includes("jest")) {
    deps.push("jest", "ts-jest", "@types/jest");
  }

  if (tools.includes("testing-library")) {
    deps.push("@testing-library/react", "@testing-library/jest-dom", "@testing-library/user-event");
  }

  if (tools.includes("cypress")) {
    deps.push("cypress");
  }

  const command = `npm install -D ${deps.join(" ")}`;
  console.log(chalk.blue(`📦 Instalando: ${deps.join(", ")}`));

  try {
    execSync(command, { stdio: "inherit" });
    console.log(chalk.green("✅ Dependências instaladas com sucesso!"));
  } catch (err) {
    console.error(chalk.red("❌ Falha na instalação."));
  }
};
