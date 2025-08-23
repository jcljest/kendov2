import Card from './Card.jsx'

export default {
  title: 'Components/Card',
  component: Card,
  args: {variant: 'default', className: '', children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  argTypes: {
    children: { control: 'text' },
    variant: { control: 'inline-radio', options: ['default', 'elevated', 'minimal'] },
    className: { control: 'text' },
    onClick: { action: 'clicked' },
  },
}

export const Default = { }
export const Elevated = { args: { variant: 'elevated' } }
export const Minimal = { args: { variant: 'minimal' } }
