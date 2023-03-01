import Button from './Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Normal = Template.bind({});

Normal.args = {
    variety: 'normal',
    children: 'Click me'
};

export const Fighting = Template.bind({});

Fighting.args = {
    variety: 'fighting',
    children: 'Click me'
};

export const Flying = Template.bind({});

Flying.args = {
    variety: 'flying',
    children: 'Click me'
};

export const Poison = Template.bind({});

Poison.args = {
    variety: 'poison',
    children: 'Click me'
};

export const Ground = Template.bind({});

Ground.args = {
    variety: 'ground',
    children: 'Click me'
};

export const Rock = Template.bind({});

Rock.args = {
    variety: 'rock',
    children: 'Click me'
};

export const Bug = Template.bind({});

Bug.args = {
    variety: 'bug',
    children: 'Click me'
};

export const Ghost = Template.bind({});

Ghost.args = {
    variety: 'ghost',
    children: 'Click me'
};

export const Steel = Template.bind({});

Steel.args = {
    variety: 'steel',
    children: 'Click me'
};

export const Fire = Template.bind({});

Fire.args = {
    variety: 'fire',
    children: 'Click me'
};

export const Water = Template.bind({});

Water.args = {
    variety: 'water',
    children: 'Click me'
};

export const Grass = Template.bind({});

Grass.args = {
    variety: 'grass',
    children: 'Click me'
};

export const Electric = Template.bind({});

Electric.args = {
    variety: 'electric',
    children: 'Click me'
};

export const Psychic = Template.bind({});

Psychic.args = {
    variety: 'psychic',
    children: 'Click me'
};

export const Ice = Template.bind({});

Ice.args = {
    variety: 'ice',
    children: 'Click me'
};

export const Dragon = Template.bind({});

Dragon.args = {
    variety: 'dragon',
    children: 'Click me'
};

export const Dark = Template.bind({});

Dark.args = {
    variety: 'dark',
    children: 'Click me'
};

export const Fairy = Template.bind({});

Fairy.args = {
    variety: 'fairy',
    children: 'Click me'
};

export const Unknown = Template.bind({});

Unknown.args = {
    variety: 'unknown',
    children: 'Click me'
};

export const Shadow = Template.bind({});

Shadow.args = {
    variety: 'shadow',
    children: 'Click me'
};
