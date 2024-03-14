import type { Config } from "tailwindcss";

const config: Omit<Config, "content"> = {
  content: [
    // https://flowbite.com/docs/getting-started/next-js/
    "./node_modules/flowbite-react/lib/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};

export default config;
