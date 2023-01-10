import { createContext, useContext } from 'react';
import { Theme, MonoPurpleLightTheme } from '../../themes';

interface ThemeContextValue {
   theme: Theme,
//    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValue>({
   theme: MonoPurpleLightTheme
//    toggleTheme: () => {
//        console.log('ThemeProvider is not rendered!')
//    }
});

export const useTheme = () => useContext(ThemeContext);