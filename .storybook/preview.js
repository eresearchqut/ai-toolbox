import { toolboxTheme } from "../src/theme/Root";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    chakra: {
      theme: toolboxTheme,
    },
  },
};

export default preview;
