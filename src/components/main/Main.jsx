import './main.css'

function Main() {
  return (
    <div>
      <main>
        <section className='hero'>
          <div className="container">
            <h3>Food app</h3>
            <h1>Why stay hungry when <br /> you can order form Bella Onojie</h1>
            <p>Download the bella onoje’s food app now on</p>
            <div className="gg">
              <button className='btn'>Playstore</button>
              <button className='btn'>App store</button>
            </div>
            <div className="aaa">
              <img src="./3.png" alt="" />
            </div>
          </div>
        </section>
        <section className='app'>
          <div className="container">
            <img src="./4.png" alt="" />
            <div>
              <h3>Create an account</h3>
              <h1>Create/login to an existing <br /> account to get started</h1>
              <p>An account is created with your email <br /> and a desired password</p>
            </div>
          </div>
        </section>
        <section className='shop'>
          <div className="container">
            <div>
              <h3>Explore varieties</h3>
              <h1>Shop for your favorites <br /> meal as e dey hot.</h1>
              <p>Shop for your favorite meals or drinks <br /> and enjoy while doing it.</p>
            </div>
            <img src="./4.png" alt="" />
          </div>
        </section>
        <section className='check'>
          <div className="container">
            <img src="./4.png" alt="" />
            <div>
              <h3>Checkout</h3>
              <h1>When you done check out <br /> and get it delivered.</h1>
              <p>When you done check out and get it <br /> delivered with ease.</p>
            </div>
          </div>
        </section>
        <section className='now'>
          <div className="container">
            <h1>Download the app now.</h1>
            <p>Available on your favorite store. Start your premium experience now</p>
            <div className="gg">
              <button className='btn'>Playstore</button>
              <button className='btn'>App store</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Main
