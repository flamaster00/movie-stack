import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: 'Button',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Button',
  theme: ButtonTheme.CLEAR,
};
export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: 'Button',
  theme: ButtonTheme.CLEAR_INVERTED,
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Button',
  theme: ButtonTheme.OUTLINE,
};
export const OutlineInverted = Template.bind({});
OutlineInverted.args = {
  children: 'Button',
  theme: ButtonTheme.OUTLINE_INVERTED,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Button',
  theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({});
Background.args = {
  children: 'Button',
  theme: ButtonTheme.BACKGROUND,
};
export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: 'Button',
  theme: ButtonTheme.BACKGROUND_INVERTED,
};
export const BackgroundDark = Template.bind({});
BackgroundDark.args = {
  children: 'Button',
  theme: ButtonTheme.BACKGROUND,
};
BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)];
export const BackgroundInvertedDark = Template.bind({});
BackgroundInvertedDark.args = {
  children: 'Button',
  theme: ButtonTheme.BACKGROUND_INVERTED,
};
BackgroundInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Square = Template.bind({});
Square.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND,
  square: true,
};

export const SquareS = Template.bind({});
SquareS.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.S,
};
export const SquareM = Template.bind({});
SquareM.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.M,
};
export const SquareL = Template.bind({});
SquareL.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.L,
};
export const SquareXL = Template.bind({});
SquareXL.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.XL,
};

export const ButtonSizeS = Template.bind({});
ButtonSizeS.args = {
  children: 'Button',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  size: ButtonSize.S,
};
export const ButtonSizeM = Template.bind({});
ButtonSizeM.args = {
  children: 'Button',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  size: ButtonSize.M,
};
export const ButtonSizeL = Template.bind({});
ButtonSizeL.args = {
  children: 'Button',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  size: ButtonSize.L,
};
export const ButtonSizeXL = Template.bind({});
ButtonSizeXL.args = {
  children: 'Button',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  size: ButtonSize.XL,
};
