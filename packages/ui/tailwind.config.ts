import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: ["./src/**/*.tsx", "./node_modules/flowbite-react/lib/**/*.js"],
  prefix: "ui-",
  presets: [sharedConfig],
};

export default config;
