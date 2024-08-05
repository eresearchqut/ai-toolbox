/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  core: {
    disableTelemetry: true,
  },
  stories: [
    // "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    // "../src/components/tool/HuggingFacePipeline.stories.js",
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    // "storybook-addon-docusaurus"
    "@chakra-ui/storybook-addon",
    "@storybook/addon-webpack5-compiler-babel",
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  docs: {},

  features: {
    emotionAlias: false,
  },

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};
export default config;
