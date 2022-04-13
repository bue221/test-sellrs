module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$",
  verbose: true,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleDirectories: ["node_modules", "<rootDir>", "/"],
};
