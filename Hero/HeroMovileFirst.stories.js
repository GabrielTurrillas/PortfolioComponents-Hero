import MovileFirstHero from "./MovileFirstHero";

export default {
  title: 'Sections/MovileFirstHero',
  component: MovileFirstHero
}

const Template = (args) => <MovileFirstHero {...args} />

export const Default = Template.bind({})
Default.args = {
  english: false,
  engButtonText: 'contact',
  buttonText: 'contacto'
}