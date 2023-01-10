import { Theme, ColorTheme, SpacingTheme } from "./types";
import { 
    DarkGrayTheme as grays,
    DarkActionTheme as actions,
    DefaultTypographyTheme as font
 } from "./constants";

export const COLOR: ColorTheme = {
    primary: '#C147E9',
    onPrimary: '#000',
    secondary: '#E5B8F4',
    onSecondary: '#000',
    surface: grays.gray6,
    onSurface: '#fff',
    background: '#000',
    label: '#fff',
    secondaryLabel: grays.gray,
    tertiaryLabel: grays.gray2,
    quaternaryLabel: grays.gray3,
    ...grays,
    ...actions
};

export const SPACING: SpacingTheme = {
    base: 8,
    double: 16,
};

const NAME = 'mono-purple-dark';

export const MonoPurpleDarkTheme: Theme = {
    name: NAME,
    color: COLOR,
    spacing: SPACING,
    font
}