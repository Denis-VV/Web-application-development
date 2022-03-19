module.exports = {
  parser: "@babel/eslint-parser",
  extends: ["eslint:recommended", "plugin:react/recommended", "standard", "standard-react", "airbnb"],
  rules: {
    quotes: ["error", "double"],
    "react/react-in-jsx-scope": "off",
    "react/function-component-definition": "off",
    "react/prop-types": "off",
  },
  parserOptions: {
    ecmaVersion: 8,
    requireConfigFile: false,
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true,
      classes: true,
    },
  },
};
