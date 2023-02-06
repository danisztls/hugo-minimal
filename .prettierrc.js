module.exports = {
  semi: false,
  endOfLine: "lf",
  trailingComma: "none",
  overrides: [
    {
      files: ["*.html"],
      options: {
        parser: "go-template"
      }
    }
  ]
}
