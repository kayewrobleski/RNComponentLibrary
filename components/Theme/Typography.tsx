import { 
    Text,
    TextStyle,
    TextProps,
    StyleSheet,
} from 'react-native';
import { useTheme } from './Theme.context';
import { Theme, TypographyTheme } from '../../themes/types';

type TextPropsOmit = Omit<TextProps, "style" | "children">

export interface TypographyProps {
    children: React.ReactNode;
    variant?: keyof TypographyTheme;
    style?: TextStyle;
    textProps?: TextPropsOmit;
}

export const Typography = (props: TypographyProps) => {
    const { style, children, textProps } = props;
    const { theme } = useTheme();
    
    const variant = props.variant || 'body';
    const color = style?.color || theme.color.onSurface;
    const styles = {
        ...theme.font[variant],
        ...style,
        color
    }
    return <Text 
        {...textProps}
        style={styles}
    >
        {children}
    </Text>;
}
    
const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        title: {
            fontSize: theme.font.title.fontSize,
            fontWeight: theme.font.title.fontWeight || 'normal'
        },
        heading: {
            fontSize: theme.font.heading.fontSize,
            fontWeight: theme.font.heading.fontWeight || 'normal'
        },
        subheading: {
            fontSize: theme.font.subheading.fontSize,
            fontWeight: theme.font.subheading.fontWeight || 'normal'
        },
        body: {
            fontSize: theme.font.body.fontSize,
            fontWeight: theme.font.body.fontWeight || 'normal'
        },
        caption: {
            fontSize: theme.font.caption.fontSize,
            fontWeight: theme.font.caption.fontWeight || 'normal'
        }
    })
}