import Button from './Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    variety: 'primary',
    children: 'Button'
};

export const Secondary = Template.bind({});

Secondary.args = {
    variety: 'secondary',
    children: 'Button'
};

export const Danger = Template.bind({});

Danger.args = {
    variety: 'danger',
    children: 'Button'
};

export const Warning = Template.bind({});

Warning.args = {
    variety: 'warning',
    children: 'Button'
};

export const Info = Template.bind({});

Info.args = {
    variety: 'info',
    children: 'Button'
};