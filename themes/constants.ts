import { GrayTheme, ActionTheme, TypographyTheme } from './types';

/**
 * GrayTheme values use Apple's design system: 
 * https://developer.apple.com/design/human-interface-guidelines/foundations/color/#specifications
 */
export const LightGrayTheme: GrayTheme = { 
    gray: '#8E8E93',
    gray2: '#AEAEB2',
    gray3: '#C7C7CC',
    gray4: '#D1D1D6',
    gray5: '#E5E5EA',
    gray6: '#F2F2F7',
}

export const DarkGrayTheme: GrayTheme = {
    gray: '#8E8E93',
    gray2: '#636366',
    gray3: '#48484A',
    gray4: '#3A3A3C',
    gray5: '#2C2C2E',
    gray6: '#1C1C1E'
}

/**
 * ActionTheme values use colors from Apple's design system: 
 * https://developer.apple.com/design/human-interface-guidelines/foundations/color/#specifications
 */
export const LightActionTheme: ActionTheme = {
    info: '#007AFF',
    success: '#34C759',
    warning: '#FF9500', 
    error: '#FF3B18',
    onAction: '#fff'
}

export const DarkActionTheme: ActionTheme = {
    info: '#0A84FF',
    success: '#30D158',
    warning: '#FF9F0A',
    error: '#FF453A',
    onAction: '#fff'
}

export const DefaultTypographyTheme: TypographyTheme = {
    title: {
        fontSize: 32
    },
    heading: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    subheading: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    body: {
        fontSize: 16
    },
    caption: {
        fontSize: 12
    }
}

