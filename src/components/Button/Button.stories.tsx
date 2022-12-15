import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '.';


// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'prueba/Button',
  component: Button,
  args: {
    content: 'CONTEND',
  },
  argTypes: {
    click: {action: 'clicked'}
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  const handlerClicked = (): void => alert('clicked!!')
  return <Button {...args} click={handlerClicked} >CONTEND</Button>
}
// export const Alert = Template.bind({});
export const First = Template.bind({});
