import Badge from './Badge';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    variety: 'primary',
    children: 'Badge'
};

export const Secondary = Template.bind({});

Secondary.args = {
    variety: 'secondary',
    children: 'Badge'
};

export const Danger = Template.bind({});

Danger.args = {
    variety: 'danger',
    children: 'Badge'
};

export const Warning = Template.bind({});

Warning.args = {
    variety: 'warning',
    children: 'Badge'
};

export const Info = Template.bind({});

Info.args = {
    variety: 'info',
    children: 'Badge'
};