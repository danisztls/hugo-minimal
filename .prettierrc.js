module.exports = {
  semi: false,
  endOfLine: "lf",
  trailingComma: "none",
  plugins: [require.resolve("prettier-plugin-go-template")]
  overrides: [
    {
      files: ["*.html"],
      options: {
        parser: "go-template"
      }
    }
  ]
}
