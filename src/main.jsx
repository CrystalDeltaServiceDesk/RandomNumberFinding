import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GetNumber from './GetNumber'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GetNumber />
  </StrictMode>
)
