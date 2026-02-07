import { useState } from 'react'
import '../index.css'
import Header from './Header/Header.jsx'
import Main from './Main/Main.jsx'
import Footer from './Footer/Footer.jsx'


function App() {
  const [count, setCount] = useState(0)
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <>
      <div className="page__content">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  )
}

export default App