export default {
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  testRegex: "/test/.*\.spec\.ts$",
  testPathIgnorePatterns: ["/lib/", "/node_modules/"],
  moduleFileExtensions: ["ts", "js", "json", "node"],
  collectCoverage: false,
  bail: true
};
