import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  args: { children: 'Click Me', variant: 'primary', size: 'md', disabled: false },
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'secondary', 'outline'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    onClick: { action: 'clicked' },
  },
}

export const Primary = { }
export const Secondary = { args: { variant: 'secondary' } }
export const Outline = { args: { variant: 'outline' } }
export const Disabled = { args: { disabled: true } }
export const Large = { args: { size: 'lg' } }
export const Small = { args: { size: 'sm' } }