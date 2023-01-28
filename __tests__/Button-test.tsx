import React from 'react';
import { Button, ButtonVariant } from '../components/Button';
import { renderWithTheme, theme } from './helpers';
import { fireEvent, screen } from '@testing-library/react-native';

// Basic
it('renders without text or icon', () => {
    const props = {
        onPress: jest.fn()
    }
    const { queryByRole } = renderWithTheme(<Button {...props}/>);
    expect(queryByRole('button')).toBeOnTheScreen();
});
it('when text is defined, renders with text', () => {
    const props = {
        text: 'Test Button',
        onPress: jest.fn()
    }
    const { queryByText } = renderWithTheme(<Button {...props} />);
    expect(queryByText(props.text)).toBeOnTheScreen();
});
it.todo('when icon is defined, renders with icon on the left');
it.todo('when rightIcon is defined, renderes with icon on the right');
it('when pressed, calls onPress', () => {
    const props = {
        text: 'Test Button',
        onPress: jest.fn()
    }
    const { getByText } = renderWithTheme(<Button {...props} />);
    fireEvent.press(screen.getByText(props.text));
    expect(props.onPress).toBeCalled();
});

// Variants
it('when variant is undefined, defaults to primary', () => {
    const props = {
        text: 'Test Button',
        onPress: jest.fn()
    }
    const primaryStyle = {
        backgroundColor: theme.color.primary
    }
    const { queryByRole } = renderWithTheme(<Button {...props} />);
    expect(queryByRole('button')).toHaveStyle(primaryStyle);
});
it('when variant is primary, has primary background', () => {
    const props = {
        text: 'Test Button',
        onPress: jest.fn(),
        variant: ('primary' as ButtonVariant)
    }
    const primaryStyle = {
        backgroundColor: theme.color.primary
    }
    const { queryByRole } = renderWithTheme(<Button {...props} />);
    expect(queryByRole('button')).toHaveStyle(primaryStyle);
});
it('when variant is secondary, has secondary background', () => {
    const props = {
        text: 'Test Button',
        onPress: jest.fn(),
        variant: ('secondary' as ButtonVariant)
    }
    const secondaryStyle = {
        backgroundColor: theme.color.secondary
    }
    const { queryByRole } = renderWithTheme(<Button {...props} />);
    expect(queryByRole('button')).toHaveStyle(secondaryStyle);
});
it.todo('when variant is tertiary, has transparent background and primary border');

// Label
it.todo('when invisibleLabel is undefined, label is visible');
it.todo('when invisibleLabel is false, label is visible');
it.todo('when invisibleLabel is true, label is visible');

// Color overrides
it.todo('when color is defined, it overrides the variant background color');
it.todo('when text color is defined, it overrides the variant text color');
it.todo('when borderColor is defined, it overrides the variant border color');