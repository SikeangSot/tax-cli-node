export default {
  testEnvironment: "jest-environment-node",
  transform: {},
  testMatch: ["**/__tests__/**/*.js", "**/?(*.)+(spec|test).js"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**.js"],
  testPathIgnorePatterns: ["/node_modules/"],
  coverageDirectory: ".coverage",
  coveragePathIgnorePatterns: ["/node_modules/"],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
    },
  },
};
