import { useState } from 'react'
import '../../index.css'

function Footer() {
  const [count, setCount] = useState(0)

  return (
    <>
        <footer className="footer page__section">
          <p className="footer__copyright">&copy; 2025 Around The U.S.</p>
        </footer>
    </>
  )
}

export default Footer