import { MouseEventHandler } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '.';

/*
	# Requirements
  ## Write test using the Given, When, Then pattern
	### Write a UI button component:
	- Confirm that button is into a HTML document
	- Confirm that the button is enabled
	- Confirm that there is a text into the button
	- Validate the click event in the button works
	- Confirm that button has the upload images function
*/
describe('Button component', () => {
	test('Component button into a document', () => {
		// Given a button component
		render(<Button>SEND</Button>);

		// When a HTML button element with as element name as "SEND"
		const button: HTMLButtonElement = screen.getByRole('button', {
			name: /send/i,
		});

		// Then HTML button element must be in the document
		expect(button).toBeInTheDocument();
	});

	test('Button is enabled', () => {
		// Given a button component
		render(<Button>SEND</Button>);

		// When a button with as element name as "SEND"
		const button: HTMLButtonElement = screen.getByRole('button', {
			name: /send/i,
		});

		// Then that the button is enabled
		expect(button).toBeEnabled();
	});

	test('Call onClicks with prop click', () => {
		// Given a button component and a mock function for props is passed to it
		const mockFn: MouseEventHandler<HTMLButtonElement> = jest.fn();
		render(<Button click={mockFn}>SEND</Button>);

		// When a button with as element name as "SEND"
		const button: HTMLButtonElement = screen.getByRole('button', {
			name: /send/i,
		});
		fireEvent.click(button);

		// Then the function be call one time
		expect(mockFn).toHaveBeenCalledTimes(1);
	});

	test('View that "SEND" text is into a button component', () => {
		// Given a button component
		render(<Button>SEND</Button>);

		// When has a screen with "SEND" text
		const buttonText: HTMLButtonElement = screen.getByText(`SEND`);

		// Then must be in the document
		expect(buttonText).toBeInTheDocument();
	});

	test('Upload images option in button component', () => {
		// Given a button component
		render(<Button upload>Upload</Button>);

		// When a button has as aria-label a "upload image"
		const inputImage: HTMLButtonElement = screen.getByTestId('Upload images');

		// Then input for images must be in the document
		expect(inputImage).toBeInTheDocument();
	});
});
