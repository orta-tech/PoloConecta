import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { PoloConectaApp } from './PoloConcetaApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PoloConectaApp />
  </StrictMode>,
)
