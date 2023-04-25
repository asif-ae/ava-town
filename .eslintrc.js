module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "next/core-web-vitals",
    "prettier",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "react/jsx-props-no-spreading": "off",
  },
};
