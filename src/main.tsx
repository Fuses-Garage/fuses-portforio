import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import theme from './const/theme.ts'
import '@mantine/core/styles.css';
import Router from './router.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
  </StrictMode>,
)
