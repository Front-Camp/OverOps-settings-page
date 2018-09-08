module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "jest/globals": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "settings": {
    "react": {
      "createClass": "createReactClass",
      "pragma": "React",  // Pragma to use, default to "React"
      "version": "16", // React version, default to the latest React stable release
      // "flowVersion": "0.53" // Flow version
    }
  },
  "plugins": [
    "react",
    "jest"
  ],
  "rules": {
      "indent": [
        "error",
        2,
        {
          "SwitchCase": 1,
          "ignoredNodes": [ "JSXAttribute", "JSXSpreadAttribute", ],
        }
      ],
      "max-len": [
        "error",
        {
          "ignoreTrailingComments": true,
          "ignoreComments": true,
          "code": 100
        }
      ],
      "linebreak-style": [
          "warn",
          "unix"
      ],
      "quotes": [
          "error",
          "single"
      ],
      "semi": [
          "error",
          "always"
      ],
      /* React rules */
      "react/prop-types": 1,
      "react/jsx-indent-props": [1, 'first'],
  }
};
