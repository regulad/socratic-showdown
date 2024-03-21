// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "content" | "presets"> = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
    // @ts-ignore -- content is ok to expand
    ...sharedConfig.content,
  ],
  presets: [sharedConfig],
};

export default config;
