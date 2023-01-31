import { render, screen } from '@testing-library/react';
import QrCard from '.';

/*
	# Requirements
  ## Write test using the Given, When, Then pattern
	### Write a UI qr card component:
	- Confirm the image qr card is in the qr card
	- Confirm the title h1 of the qr card
	- Confirm the description of the qr card
*/
describe('Qr Card Component', () => {
	it('validate if the image contain the url of the photo qr code in the qr card', () => {
		// Given a rendering QrCard component
		render(<QrCard />);

		// When an element img with alt-text as a 'qr code' is in the document
		const qrImageCard = screen.getByAltText('qr code');

		// Then the image will must be in the qr card
		expect(qrImageCard).toHaveAttribute(
			'src',
			'https://github.com/CesarGMEFA/qr-code/raw/main/src/images/image-qr-code.png'
		);
	});

	it('Validate the title h1 tag is in the card', () => {
		// Given a rendering QrCard component
		render(<QrCard />);

		// When the title h1 qr card exits
		const qrTitleCard = screen.getByRole('heading', { level: 1 });

		// Then the title h1 will must be in the qr card
		expect(qrTitleCard).toBeInTheDocument();
	});

	it('Validate the title h1 tag in the card contain text', () => {
		// Given a rendering QrCard component and constant with the qr card's paragraph
		render(<QrCard />);
		const paragraph =
			'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level';

		// When the paragraph with text in the qr card exits
		const qrTitleCard = screen.getByText(paragraph);

		// Then the paragraph with text will must be in the qr card
		expect(qrTitleCard).toBeInTheDocument();
	});
});
