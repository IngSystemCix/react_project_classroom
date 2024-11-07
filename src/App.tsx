import { ReactNode } from 'react'
import './App.css'
import { Footer, Jumbotron, Navbar } from './components'

interface Props {
  children: ReactNode
}

function App({children}: Props) {

  return (
    <>
      <Jumbotron>
        <h1>Curso de React</h1>
        <p>Este es un tema del curso de JS Avanzado</p>
      </Jumbotron>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default App
