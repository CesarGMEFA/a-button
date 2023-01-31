import Button from "../../components/Button"
import './ButtonsLayout.css'

function ButtonsLayout(): JSX.Element {

  const handleClick = (): void => {
		alert('Click Click!!!');
	};

  return (
    <section className="ButtonsLayout">
      <h1>Some Buttons</h1>
			<p>Defaults buttons, size: small & variant: text.</p>

			<section className='ButtonsLayout-section'>
				<section className='ButtonsLayout-section-box'>
					<h2>Text Buttons</h2>
					<p>Buttons size: large, upload: images & variant: text.</p>
					<Button size='large' upload>UPLOAD</Button>
				</section>

				<section className='ButtonsLayout-section-box'>
					<h2>Contained Buttons</h2>
					<p>Buttons size: small, medium, large & variant: contained.</p>
					<Button size='small' variant='contained'>
						CONTEND
					</Button>
					<Button size='medium' variant='contained'>
						CONTEND
					</Button>
					<Button size='large' variant='contained' click={handleClick}>
						CONTEND
					</Button>
				</section>

				<section className='ButtonsLayout-section-box'>
					<h2>Outlined Buttons</h2>
					<p>Buttons size: small, medium, large & variant: outlined.</p>
					<Button size='small' variant='outlined'>
						CONTEND
					</Button>
					<Button size='medium' variant='outlined'>
						CONTEND
					</Button>
					<Button size='large' variant='outlined'>
						CONTEND
					</Button>
				</section>

				<section className='ButtonsLayout-section-box'>
					<h2>Colors Buttons</h2>
					<p>Buttons size: small, medium, large & colors.</p>
					<Button size='large' variant='outlined' color='secondary'>
						CONTEND
					</Button>
					<Button size='large' variant='outlined' color='success'>
						CONTEND
					</Button>
					<Button size='large' variant='outlined' color='error'>
						CONTEND
					</Button>
				</section>
			</section>
    </section>
  )
}

export default ButtonsLayout