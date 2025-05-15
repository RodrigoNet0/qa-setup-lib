import { installDeps } from "../src/commands/installDeps.js";
import { vi, describe, it, expect } from "vitest";
import { execSync } from "child_process";

vi.mock("child_process", () => ({
  execSync: vi.fn()
}));

describe("installDeps", () => {
  it("deve chamar execSync com as dependências certas", async () => {
    await installDeps(["jest", "testing-library"]);
    expect(execSync).toHaveBeenCalledWith(
      expect.stringContaining("jest ts-jest @types/jest @testing-library/react"),
      { stdio: "inherit" }
    );
  });
});
