import { 
    Text,
    View, 
    StyleSheet,
    ViewStyle
 } from 'react-native';
 import { Theme } from '../../themes';
import { ColorTheme } from '../../themes/types';
import { useTheme } from './Theme.context';
import _ from 'lodash';

interface ColorStyle {
    backgroundColor: string;
}
interface OnColorStyle {
    fontSize: number,
    color: string
}
type Color = keyof ColorTheme
interface ColorItemProps {
    color: Color 
    onColor: Color
    theme: Theme,
    containerStyle: ViewStyle,
    colorStyle: ColorStyle, 
    onColorStyle: OnColorStyle,
    gray?: boolean
}


const ColorItem = ({
    color,
    onColor,
    theme,
    containerStyle,
    colorStyle,
    onColorStyle
}: ColorItemProps) => {
    return <View style={{...containerStyle, ...colorStyle}} >
        <Text style={onColorStyle}>{`${color}: ${theme.color[color]}`}</Text>
        <Text style={onColorStyle}>{`${onColor}: ${theme.color[onColor]}`}</Text>
    </View>
}

export const Colors = () => {
    const { theme } = useTheme();
    const styles = createStyles(theme);

    return <>
        <Text style={styles.heading}>Base Colors</Text>
        <View style={styles.container}>
            <ColorItem 
                color="primary" 
                onColor="onPrimary" 
                theme={theme} 
                containerStyle={styles.view}
                colorStyle={styles.primary}
                onColorStyle={styles.primaryText}
            />
            <ColorItem 
                color="secondary" 
                onColor="onSecondary" 
                theme={theme} 
                containerStyle={styles.view}
                colorStyle={styles.secondary}
                onColorStyle={styles.secondaryText}
            />
            <ColorItem 
                color="surface" 
                onColor="onSurface" 
                theme={theme} 
                containerStyle={styles.view}
                colorStyle={styles.surface}
                onColorStyle={styles.surfaceText}
            />
            <ColorItem 
                color="background" 
                onColor="onSurface" 
                theme={theme} 
                containerStyle={styles.view}
                colorStyle={styles.background}
                onColorStyle={styles.surfaceText}
            />
        </View>
        <Text style={styles.heading}>Grays</Text>
        <View style={styles.container}>
            {
                _.range(1, 7).map(index => {
                    const color = index === 1
                        ? 'gray'
                        : `gray${index}`;
                    return <ColorItem 
                        key={color}
                        color={(color as Color)} 
                        onColor="onSurface" 
                        theme={theme} 
                        containerStyle={styles.view}
                        // Need to cast to any to avoid typescript error
                        colorStyle={(styles as any)[color]} 
                        onColorStyle={styles.surfaceText}
                    />
                })
            }
        </View>
        <Text style={styles.heading}>Actions</Text>
        <View style={styles.container}>
            <ColorItem 
                color="info" 
                onColor="onAction" 
                theme={theme} 
                containerStyle={styles.view}
                colorStyle={styles.info}
                onColorStyle={styles.actionText}
            />
            <ColorItem 
                color="success" 
                onColor="onAction" 
                theme={theme} 
                containerStyle={styles.view}
                colorStyle={styles.success}
                onColorStyle={styles.actionText}
            />
            <ColorItem 
                color="warning" 
                onColor="onAction" 
                theme={theme} 
                containerStyle={styles.view}
                colorStyle={styles.warning}
                onColorStyle={styles.actionText}
            />
            <ColorItem 
                color="error" 
                onColor="onAction" 
                theme={theme} 
                containerStyle={styles.view}
                colorStyle={styles.error}
                onColorStyle={styles.actionText}
            />
        </View>
        <Text style={styles.heading}>Labels</Text>
        <View style={{...styles.view, ...styles.labelView, ...styles.surface}}>
            <Text style={styles.label}>Label</Text>
            <Text style={styles.secondaryLabel}>Secondary label</Text>
            <Text style={styles.tertiaryLabel}>Tertiary label</Text>
            <Text style={styles.quaternaryLabel}>Quaternary label</Text>
        </View>
    </>
}

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'row',
        },
        view: {
            height: 136,
            width: 136,
            marginVertical: 16,
            marginHorizontal: 4,
            padding: 8,
            borderRadius: 4,
            display: 'flex',
            justifyContent: 'flex-end'
        },
        heading: {
            marginLeft: 4,
            fontSize: 20,
            fontWeight: 'bold',
            color: theme.color.onSurface
        },
        primary: { 
            backgroundColor: theme.color.primary
        },
        primaryText: {
            fontSize: 12,
            color: theme.color.onPrimary,
        },
        secondary: {
            backgroundColor: theme.color.secondary
        }, 
        secondaryText: {
            fontSize: 12,
            color: theme.color.onSecondary,
        },
        surface: {
            backgroundColor: theme.color.surface
        },
        surfaceText: {
            fontSize: 12,
            color: theme.color.onSurface
        },
        background: {
            backgroundColor: theme.color.background,
            borderColor: theme.color.onSurface,
            borderWidth: 1,
            boxSizing: 'border-box'
        },
        gray: {
            backgroundColor: theme.color.gray
        },
        gray2: {
            backgroundColor: theme.color.gray2
        },
        gray3: {
            backgroundColor: theme.color.gray3
        },
        gray4: {
            backgroundColor: theme.color.gray4
        },
        gray5: {
            backgroundColor: theme.color.gray5
        },
        gray6: {
            backgroundColor: theme.color.gray6
        },
        labelView: {
            width: 400,
            margin: 8,
            padding: 16,
            justifyContent: 'space-evenly'
        },
        label: {
            color: theme.color.label
        },
        secondaryLabel: {
            color: theme.color.secondaryLabel
        },
        tertiaryLabel: {
            color: theme.color.tertiaryLabel
        },
        quaternaryLabel: {
            color: theme.color.quaternaryLabel
        },
        info: {
            backgroundColor: theme.color.info
        },
        success: {
            backgroundColor: theme.color.success
        },
        warning: {
            backgroundColor: theme.color.warning
        },
        error: {
            backgroundColor: theme.color.error
        },
        actionText: {
            color: theme.color.onAction,
            fontSize: 12
        }
    })
}