import PokeBadge from './PokeBadge';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'PokeBadge',
  component: PokeBadge,
} as ComponentMeta<typeof PokeBadge>;

const Template: ComponentStory<typeof PokeBadge> = (args) => <PokeBadge {...args} />;

export const Normal = Template.bind({});

Normal.args = {
    variety: 'normal',
    children: '#001'
};

export const Fighting = Template.bind({});

Fighting.args = {
    variety: 'fighting',
    children: '#001'
};

export const Flying = Template.bind({});

Flying.args = {
    variety: 'flying',
    children: '#001'
};

export const Poison = Template.bind({});

Poison.args = {
    variety: 'poison',
    children: '#001'
};

export const Ground = Template.bind({});

Ground.args = {
    variety: 'ground',
    children: '#001'
};

export const Rock = Template.bind({});

Rock.args = {
    variety: 'rock',
    children: '#001'
};

export const Bug = Template.bind({});

Bug.args = {
    variety: 'bug',
    children: '#001'
};

export const Ghost = Template.bind({});

Ghost.args = {
    variety: 'ghost',
    children: '#001'
};

export const Steel = Template.bind({});

Steel.args = {
    variety: 'steel',
    children: '#001'
};

export const Fire = Template.bind({});

Fire.args = {
    variety: 'fire',
    children: '#001'
};

export const Water = Template.bind({});

Water.args = {
    variety: 'water',
    children: '#001'
};

export const Grass = Template.bind({});

Grass.args = {
    variety: 'grass',
    children: '#001'
};

export const Electric = Template.bind({});

Electric.args = {
    variety: 'electric',
    children: '#001'
};

export const Psychic = Template.bind({});

Psychic.args = {
    variety: 'psychic',
    children: '#001'
};

export const Ice = Template.bind({});

Ice.args = {
    variety: 'ice',
    children: '#001'
};

export const Dragon = Template.bind({});

Dragon.args = {
    variety: 'dragon',
    children: '#001'
};

export const Dark = Template.bind({});

Dark.args = {
    variety: 'dark',
    children: '#001'
};

export const Fairy = Template.bind({});

Fairy.args = {
    variety: 'fairy',
    children: '#001'
};

export const Unknown = Template.bind({});

Unknown.args = {
    variety: 'unknown',
    children: '#001'
};

export const Shadow = Template.bind({});

Shadow.args = {
    variety: 'shadow',
    children: '#001'
};
