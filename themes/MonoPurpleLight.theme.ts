import { Theme, ColorTheme, SpacingTheme } from "./types";
import { 
    LightGrayTheme as grays,
    LightActionTheme as actions,
    DefaultTypographyTheme as font
} from './constants';

const COLOR: ColorTheme = {
    primary: '#810CA8',
    onPrimary: '#fff',
    secondary: '#2D033B',
    onSecondary: '#fff',
    surface: grays.gray6,
    onSurface: '#000',
    background: '#fff',
    label: '#000',
    secondaryLabel: grays.gray,
    tertiaryLabel: grays.gray2,
    quaternaryLabel: grays.gray3,
    ...grays,
    ...actions
};

const SPACING: SpacingTheme = {
    base: 8,
    double: 16,
};

const NAME = 'mono-purple-light';

export const MonoPurpleLightTheme: Theme = {
    name: NAME,
    color: COLOR,
    spacing: SPACING,
    font
}