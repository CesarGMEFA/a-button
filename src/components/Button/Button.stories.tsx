import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '.';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
	title: 'prueba/Button',
	component: Button,
	argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {

	return (
		<Button {...args}>
			CONTEND
		</Button>
	);
};
// export const Alert = Template.bind({});
export const First = Template.bind({});
