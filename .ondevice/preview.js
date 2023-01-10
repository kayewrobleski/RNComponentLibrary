import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds";
import { ThemeContext } from '../components/Theme/Theme.context';
import { MonoPurpleLightTheme, MonoPurpleDarkTheme } from '../themes';

const THEME = MonoPurpleDarkTheme;

const withTheme = (Story) => (
  <ThemeContext.Provider value={{theme: THEME}}>
    <Story />
  </ThemeContext.Provider>
);

export const decorators = [
  withBackgrounds,
  withTheme
];

export const parameters = {
  backgrounds: {
    default: "theme",
    values: [
      { name: "theme", value: THEME.color.background },
      { name: "light", value: MonoPurpleLightTheme.color.background },
      { name: "dark", value: MonoPurpleDarkTheme.color.background },
    ],
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};