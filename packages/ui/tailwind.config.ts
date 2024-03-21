import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "prefix" | "presets" | "content" | "corePlugins"> = {
  // @ts-ignore -- content is an array, its iterable
  content: ["./src/**/*.tsx", ...sharedConfig.content],
  // prefix: "ui-", // complicates flowbite and importing components
  presets: [sharedConfig],
  corePlugins: {
    preflight: false, // if we don't disable preflight in this package, we will run into a conflict with the preflight from the shared config overridig the styles set in individual apps
  },
};

export default config;
