# @seu-org/qa-setup

Setup rápido de ferramentas de QA: **Jest**, **Cypress**, **React Testing Library** com TypeScript.

## Instalação

```bash
npm install -D @seu-org/qa-setup
```

## Uso

```bash
npx qa-setup
```

Isso irá copiar os arquivos de configuração (`jest.config.ts`, `cypress.config.ts`, `test-utils.ts`) para o seu projeto.

## Dependências que você deve instalar:

```bash
npm install -D jest ts-jest @types/jest \
  @testing-library/react @testing-library/jest-dom @testing-library/user-event \
  cypress
```
