import { ThemeProvider } from 'styled-components'
import { defaultThemes } from './styles/theme/default'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultThemes}>
      <GlobalStyle/>
      <h1>Olá mundo</h1>
    </ThemeProvider>
  )
}

export default App
