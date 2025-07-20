import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router";
import router from "./router.jsx"
import { SectionNavProvider } from './contexts/SectionNav.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SectionNavProvider>
      <RouterProvider router={router} />
    </SectionNavProvider>
  </StrictMode>,
)
