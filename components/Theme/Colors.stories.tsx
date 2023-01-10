import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Colors as ColorsComponent} from './Colors';

export default {
  title: 'theme/Colors',
  component: ColorsComponent,
} as ComponentMeta<typeof ColorsComponent>;

export const Colors: ComponentStory<typeof ColorsComponent> = () => (
  <ColorsComponent />
);
