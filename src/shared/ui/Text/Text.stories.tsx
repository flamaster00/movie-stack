import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'title',
  text: 'Some text',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'title',
  text: 'Some text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
  title: 'title',
  text: 'Some text',
  theme: TextTheme.ERROR,
};

export const Warning = Template.bind({});
Warning.args = {
  title: 'title',
  text: 'Some text',
  theme: TextTheme.WARNING,
};

export const Success = Template.bind({});
Success.args = {
  title: 'title',
  text: 'Some text',
  theme: TextTheme.SUCCESS,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
  title: 'title',
};

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
  title: 'title',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyText = Template.bind({});
onlyText.args = {
  text: 'Some text',
};

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
  text: 'Some text',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
