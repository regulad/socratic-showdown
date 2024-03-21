// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "content" | "presets" | "darkMode"> = {
  // @ts-ignore -- this is a valid tailwind config
  content: ["./stories/**/*.{js,ts,jsx,tsx,mdx}", ...sharedConfig.content],
  darkMode: ["class", '[data-mode="dark"]'],
  presets: [sharedConfig],
};

export default config;
