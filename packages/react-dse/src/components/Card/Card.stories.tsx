import Card from './Card';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Card content',
};