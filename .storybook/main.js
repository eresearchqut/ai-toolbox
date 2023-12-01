/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
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
    "@chakra-ui/storybook-addon",
    // "storybook-addon-docusaurus"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  features: {
    emotionAlias: false,
  },
};
export default config;
