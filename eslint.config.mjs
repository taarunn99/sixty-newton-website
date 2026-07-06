import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

// eslint-config-next 16+ ships flat configs directly under
// `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`,
// so the FlatCompat wrapper (@eslint/eslintrc) is no longer needed. The
// wrapper was triggering a circular-JSON error during config validation
// on ESLint 9.39 with typescript-eslint 8.59.
const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts"],
  },
];

export default eslintConfig;
