module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$",
  "moduleFileExtensions": [
    "js",
    "jsx",
    "json",
    "node"
  ],
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  "setupTestFrameworkScriptFile": "<rootDir>/src/test-config-files/setupEnzyme.js",

  "moduleNameMapper": {
    "\\.scss$": "identity-obj-proxy"
  }
};
