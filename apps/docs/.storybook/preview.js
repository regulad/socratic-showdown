import { withThemeByClassName } from '@storybook/addon-themes';
import "@repo/ui/styles.css";
import "./globals.css";

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
];
