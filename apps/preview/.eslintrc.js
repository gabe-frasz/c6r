module.exports = {
  extends: "gabe/next",
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
  overrides: [
    {
      files: ["./*.config.{js,cjs}"],
      env: {
        node: true,
      },
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
};
