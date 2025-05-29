/** @type {import("eslint").FlatConfig[] } */
export default [
  {
  
    ignores: ["dist"],

    
    env: {
      browser: true,
      node:    true,
      es2021:  true
    },

  
    languageOptions: {
      ecmaVersion: "latest",
      sourceType:  "module",
      ecmaFeatures: { jsx: true }
    }
  },

  {
    
    files: ["**/*.{js,jsx}"],
    plugins: {
      "react-hooks":  reactHooks,
      "react-refresh": reactRefresh
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      
    }
  }
];
