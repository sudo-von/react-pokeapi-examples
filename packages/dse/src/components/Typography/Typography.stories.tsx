import Typography from './Typography';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Typography'
};