module.exports = {
  stories: ["../components/**/*.stories.?(ts|tsx|js|jsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-react-native-web",
    "@react-theming/storybook-addon"
  ],
  framework: "@storybook/react",
};
