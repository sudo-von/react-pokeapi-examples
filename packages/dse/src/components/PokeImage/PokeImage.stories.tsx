import PokeImage from './PokeImage';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'PokeImage',
  component: PokeImage,
} as ComponentMeta<typeof PokeImage>;

const Template: ComponentStory<typeof PokeImage> = (args) => <PokeImage {...args} />;

export const Default = Template.bind({});

Default.args = {
    src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    alt: 'Bulbasaur'
};