import Image from './Image';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Image',
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Default = Template.bind({});

Default.args = {
    src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    alt: 'Bulbasaur'
};