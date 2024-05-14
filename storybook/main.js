/** @type { import('@storybook/server-webpack5').StorybookConfig } */
/** Change the line below to set the active theme. **/
// const theme = "workforce";
const theme="workforce";

const config = {
  stories: [
    // Change the path of lines below when the workforce theme is installed.
    `../docroot/themes/custom/${theme}/components/**/*.mdx`,
    `../docroot/themes/custom/${theme}/components/**/*.stories.@(json|yaml|yml)`,
    // Uncomment the two lines below if we want to write stories outside of Drupal.
    // "../stories/**/*.mdx",
    // "../stories/**/*.stories.@(json|yaml|yml)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    // This addon increases ecosystem compatibility with Webpack 5 projects while maintaining high performance.
    // See https://storybook.js.org/docs/builders/webpack#swc
    "@storybook/addon-webpack5-compiler-swc"
  ],
  framework: {
    name: "@storybook/server-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  // Storybook runs on port 6006, so we have to register our webserver root.
  // See https://storybook.js.org/docs/configure/images-and-assets#serving-static-files-via-storybook-configuration
  staticDirs: [
    "../docroot/themes/custom/workforce/dist/uswds",
    // Uncomment the line below if we want to write stories outside of Drupal.
    // "../stories/assets",
  ],
  docs: {
    autodocs: true,
    defaultName: 'Documentation',
  },
};
export default config;
