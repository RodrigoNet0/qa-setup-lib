import fs from "fs";
import path from "path";
import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { copyConfigs } from "../src/utils/copyConfigs";


const tempDir = path.resolve(__dirname, "../temp-test");

describe("copyConfigs", () => {
  beforeAll(() => {
    fs.mkdirSync(tempDir, { recursive: true }); 
    process.chdir(tempDir);                     
  });

afterAll(() => {
  if (fs.existsSync(tempDir)) {
    fs.readdirSync(tempDir).forEach((file) => {
      const filePath = path.join(tempDir, file);
      fs.rmSync(filePath, { recursive: true, force: true });
    });
  }
});


  it("deve copiar o arquivo jest.config.ts", async () => {
    await copyConfigs();

    const jestConfigExists = fs.existsSync(
      path.resolve(tempDir, "jest.config.ts")
    );
    expect(jestConfigExists).toBe(true);
  });
});
