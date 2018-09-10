module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recommended-scss"
  ],
  plugins: [
    "stylelint-scss"
  ],
  rules: {
    indentation: 2,
    "number-leading-zero": null,
    "selector-pseudo-class-no-unknown": [true, {
      ignorePseudoClasses: ["global"]
    }],
    "selector-class-pattern": "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$"
  }
};
