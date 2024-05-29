// tailwind.config.ts
import type { Config } from "tailwindcss";

export default <Config>{
  content: ["./**/*.vue", "./node_modules/@storefront-ui/vue/**/*.{js,mjs}"],
};
