import React from 'react';
import '@testing-library/jest-native/extend-expect';
import { View } from 'react-native';
import { Typography } from '../components/Theme/Typography';
import { MonoPurpleLightTheme as theme } from '../themes';
import { renderWithTheme } from './global-test';

it('renders text', () => {
    const text = 'Hello!';
    const { queryByText } = renderWithTheme(<Typography>{text}</Typography>);
    expect(queryByText(text)).toBeOnTheScreen();
});

it('when variant is undefined, defaults to \'body\' styles', () => {
    const text = 'Hello!';
    const { queryByText } = renderWithTheme(<Typography>{text}</Typography>);
    expect(queryByText(text)).toHaveStyle(theme.font.body);
})

it('when style.color is undefined, defaults to theme.color.onSurface', () => {
    const text = 'Hello!';
    const { queryByText } = renderWithTheme(<Typography>{text}</Typography>);
    const color = theme.color.onSurface;
    expect(queryByText(text)).toHaveStyle({color});
})

it('when style is defined, has the given styles', () => {
    const text = 'Hello!';
    const style = { margin: 5, color: 'red' }
    const { queryByText } = renderWithTheme(<Typography style={style}>{text}</Typography>);
    expect(queryByText(text)).toHaveStyle(style);
})
it('when textProps is defined, has the given props', () => {
    const text = 'Hello!';
    const textProps = { accessible: true}
    const { queryByText } = renderWithTheme(<Typography textProps={textProps}>{text}</Typography>);
    expect(queryByText(text)).toHaveProp('accessible', true);
})

it('has the font size and font weight defined in theme', () => {
    const { queryByText } = renderWithTheme(<View>
            <Typography variant="title">title</Typography>
            <Typography variant="heading">heading</Typography>
            <Typography variant="subheading">subheading</Typography>
            <Typography variant="body">body</Typography>
            <Typography variant="caption">caption</Typography>
    </View>);
    expect(queryByText('title')).toHaveStyle(theme.font.title);
    expect(queryByText('heading')).toHaveStyle(theme.font.heading);
    expect(queryByText('subheading')).toHaveStyle(theme.font.subheading);
    expect(queryByText('body')).toHaveStyle(theme.font.body);
    expect(queryByText('caption')).toHaveStyle(theme.font.caption);
})