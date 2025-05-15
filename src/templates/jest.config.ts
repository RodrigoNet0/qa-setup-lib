export default {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/test-utils.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};
