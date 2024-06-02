import { ClerkProvider } from '@clerk/clerk-react'
import { dark } from '@clerk/themes'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App'
const { VITE_CLERK_PUBLISHABLE_KEY } = import.meta.env

const publishableKey = VITE_CLERK_PUBLISHABLE_KEY

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider
      publishableKey={publishableKey}
      appearance={{
        baseTheme: dark,
      }}
    >
      <App />
    </ClerkProvider>
  </React.StrictMode>,
)
