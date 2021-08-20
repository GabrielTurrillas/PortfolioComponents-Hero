import HeroMovileFirst from "./HeroMovileFirst";
import StoryRouter from 'storybook-react-router'

export default {
  title: 'Screens/HeroMovileFirst',
  component: HeroMovileFirst,
  decorators: [StoryRouter()]
}

const Template = (args) => <HeroMovileFirst {...args} />

export const Default = Template.bind({})

Default.args = {
  english: false,
  engButtonText: 'Contact',
  buttonText: 'Contacto',
  contactUrl: '#!',
  big: false,
}