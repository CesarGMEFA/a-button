import './QrCard.css'

function QrCard(): JSX.Element {
  return (
    <section className='card'>
      <section>
        <img src="https://github.com/CesarGMEFA/qr-code/raw/main/src/images/image-qr-code.png"
          alt="qr code"
          className='card-img'
        />
      </section>
      <section className='card-texts'>
        <h1 className='card-texts_title'>Improve your front-end skills by building projects</h1>
        <p className='card-texts_paragraph'>
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
      </p>
      </section>
    </section>
  )
}

export default QrCard