import { ThemeProvider } from 'styled-components'
import { defaultThemes } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { Body } from './components/Body'

function App() {
  return (
    <ThemeProvider theme={defaultThemes}>
      <Body/>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
