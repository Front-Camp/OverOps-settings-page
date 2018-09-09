module.exports = {
  extends: "stylelint-config-standard",
  plugins: [
    "stylelint-scss"
  ],
  rules: {
    indentation: 2,
    "number-leading-zero": null,
    "selector-pseudo-class-no-unknown": [true, {
      ignorePseudoClasses: ["global"]
    }]
  }
};
