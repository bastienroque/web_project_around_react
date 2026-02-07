import { useState } from 'react'
import '../../index.css'
import logo from "../../../images/logo.svg"

function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
        <header className="header page__section">
          <img
          alt="Logotipo Around The U.S."
          className="logo header__logo"
          src={logo}
        />
        </header>
    </>
  )
}

export default Header
