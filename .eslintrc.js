module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always", // Sử dụng self-closing cho các thẻ void (như img, input, br, etc.)
          normal: "never", // Không sử dụng self-closing cho các thẻ thông thường
          component: "always", // Sử dụng self-closing cho các thành phần (components)
        },
      },
    ],
  },
};
