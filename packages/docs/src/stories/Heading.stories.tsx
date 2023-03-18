import { Heading, HeadingProps } from '@wb-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typograph/Heading',
  component: Heading,

  args: {
    children: 'Elit labore ad deserunt voluptate cupidatat tempor.',
    size: 'md',
  },

  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
}
