import PrimaryButton from "./PrimaryButton";
import StoryRouter from 'storybook-react-router'

export default {
  title: 'Component/PrimaryButton',
  component: PrimaryButton,
  decorators: [StoryRouter()],
  parameters: {
    layout: 'centered',
  },
}

const Template = (args) => <PrimaryButton {...args} />

export const Default = Template.bind({})

Default.args = {
  english: false,
  engButtonText: 'Contact',
  buttonText: 'Contacto',
  contactUrl: '#!'
}