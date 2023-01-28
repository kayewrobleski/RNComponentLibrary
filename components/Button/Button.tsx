import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Theme } from '../../themes';
import { useTheme } from '../Theme/Theme.context';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type ButtonProps = {
  onPress: () => void;
  text?: string;
  variant?: ButtonVariant,
  color?: string;
  textColor?: string;
};

const createStyles = (props: ButtonProps, theme: Theme) => {
  return StyleSheet.create({
    button: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 4,
      alignSelf: 'flex-start',
      flexGrow: 0
    },
    primary: {
      backgroundColor: theme.color.primary
    },
    secondary: {
      backgroundColor: theme.color.secondary
    },
    tertiary: {},
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    buttonContainer: {
      alignItems: 'flex-start',
      flex: 1,
    },
  });
}

export const Button = (props: ButtonProps) => {
  const { theme } = useTheme();
  const styles = createStyles(props, theme);
  const {text, onPress, variant, color, textColor} = props;

  // const backgroundColor = color ?? theme.color[variant ?? 'primary'];
  return <View style={styles.buttonContainer}>
    <TouchableOpacity
      style={[styles.button, styles[variant ?? 'primary']]}
      onPress={onPress}
      activeOpacity={0.8}
      accessibilityRole='button'>
      <Text style={[styles.buttonText, !!textColor && {color: textColor}]}>
        {text}
      </Text>
    </TouchableOpacity>
  </View>
};
