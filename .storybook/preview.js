import { ThemeContext } from '../components/Theme/Theme.context.tsx';
import { withThemes } from '@react-theming/storybook-addon';
import { MonoPurpleLightTheme, MonoPurpleDarkTheme } from '../themes';

const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// Wrap all stories in Theme Provider
const providerFn = ({ theme, children }) => {
  return <ThemeContext.Provider value={{theme}}>{children}</ThemeContext.Provider>
}

const themes = [
  MonoPurpleLightTheme, 
  MonoPurpleDarkTheme
];

// Update background on theme switch
const onThemeSwitch = context => {
  const { theme } = context;
  const parameters = {
    backgrounds: {
      default: theme.color.background,
    },
  };
  return {
    parameters,
  };
};

const decorators = [
  withThemes(ThemeContext, themes, { providerFn, onThemeSwitch })
];

export {
  decorators,
  parameters
}