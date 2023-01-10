import React from 'react';
import { View } from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Typography as TypographyComponent} from './Typography';

export default {
  title: 'theme/Typography',
  component: TypographyComponent,
} as ComponentMeta<typeof TypographyComponent>;

export const Typography: ComponentStory<typeof TypographyComponent> = () => {
    return <View style={{margin: 8, display: 'flex'}}>
        <TypographyComponent variant='title' style={{margin: 8}}>Title</TypographyComponent>
        <TypographyComponent variant='heading' style={{margin: 8}}>Heading</TypographyComponent>
        <TypographyComponent variant='subheading' style={{margin: 8}}>Subheading</TypographyComponent>
        <TypographyComponent style={{margin: 8}}>Body (default)</TypographyComponent>
        <TypographyComponent variant='caption' style={{margin: 8}}>Caption</TypographyComponent>
    </View>;
}
