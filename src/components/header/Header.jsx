import './header.css'

function Header() {
  return (
    <div>
      <header>
      <div className="container">
        <img src="./1.png" alt="" />
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Faq</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
      </header>
    </div>
  )
}

export default Header
