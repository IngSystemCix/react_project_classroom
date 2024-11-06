import './App.css'
import { Counter, ToggleTheme } from './components'
import { ThemeProvider } from './context'

function App() {

  return (
    <>
      <ThemeProvider>
        <div>
          <h1>Ejemplo de Hooks en React</h1>
          <ToggleTheme />
          <Counter />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
