import prompts from "prompts";
import chalk from "chalk";
import { copyConfigs } from "./commands/copyConfigs";
import { installDeps } from "./commands/installDeps";
console.log(chalk.cyanBright("🔧 QA Setup CLI"));
(async () => {
    const response = await prompts([
        {
            type: "multiselect",
            name: "tools",
            message: "Quais ferramentas deseja configurar?",
            choices: [
                { title: "Jest", value: "jest" },
                { title: "Cypress", value: "cypress" },
                { title: "Testing Library", value: "testing-library" }
            ],
            min: 1
        },
        {
            type: "confirm",
            name: "install",
            message: "Deseja instalar as dependências agora?",
            initial: true
        }
    ]);
    await copyConfigs(response.tools);
    if (response.install) {
        await installDeps(response.tools);
    }
    console.log(chalk.green("✅ Configuração finalizada!"));
})();
