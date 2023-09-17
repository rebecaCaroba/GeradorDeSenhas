import { ThemeProvider } from 'styled-components'
import { defaultThemes } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { Container } from './components/Container'

function App() {
  return (
    <ThemeProvider theme={defaultThemes}>
      <Container/>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
