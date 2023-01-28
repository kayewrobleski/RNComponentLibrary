import React from 'react';
import { Text } from 'react-native'
import { render } from '@testing-library/react-native';
import { ThemeContext } from '../components/Theme';
import { MonoPurpleLightTheme } from '../themes';

export const theme = MonoPurpleLightTheme;

export const renderWithTheme = (Component: React.ReactElement) => {
    return render(
        <ThemeContext.Provider value={{theme}}>
            {Component}
        </ThemeContext.Provider>
    )
}


it('renders with theme', () => {
    const text = 'Testing'
    const { queryByText } = renderWithTheme(<Text>{text}</Text>);
    expect(queryByText(text)).toBeOnTheScreen();
})