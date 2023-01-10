export interface Theme {
    name: string,
    color: ColorTheme,
    spacing: SpacingTheme,
    font: TypographyTheme
}

export interface GrayTheme {
    gray: string,
    gray2: string,
    gray3: string,
    gray4: string,
    gray5: string,
    gray6: string
}

export interface ActionTheme {
    info: string;
    success: string;
    warning: string;
    error: string;
    onAction: string;
}

export interface ColorTheme extends GrayTheme, ActionTheme {
    primary: string;
    onPrimary: string;
    secondary: string;
    onSecondary: string;
    surface: string;
    onSurface: string;
    background: string;
    label: string;
    secondaryLabel: string;
    tertiaryLabel: string;
    quaternaryLabel: string;
}

export interface SpacingTheme {
    base: number;
    double: number;
}

export interface TypographyVariantOptions {
    fontSize: number
    fontWeight?: 'normal' | 'bold',
}

export interface TypographyTheme {
    title: TypographyVariantOptions,
    heading: TypographyVariantOptions,
    subheading: TypographyVariantOptions,
    body: TypographyVariantOptions,
    caption: TypographyVariantOptions
}