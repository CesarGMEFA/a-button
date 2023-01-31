import { ComponentStory, ComponentMeta } from '@storybook/react';
import QrCard from '.';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
	title: 'Testing/Card',
	component: QrCard,
	parameters: {
		layout: 'fullscreen',
		backgrounds: {
			default: 'gray blue',
			values: [
				{ name: 'gray blue', value: '#ababe2' },
				{ name: 'blue mmarine', value: 'hsl(218, 44%, 22%)' },
			],
		},
	},
} as ComponentMeta<typeof QrCard>;

export const Card: ComponentStory<typeof QrCard> = () => {
	return <QrCard />;
};
