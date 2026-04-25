

import './App.css'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './appRouter'
import { Provider } from 'react-redux'
import { store } from './store'
import { ErrorBoundary } from '@/shared/ui/ErrorBoundary/ErrorBoundary'

function App() {
  
  return (
    <>
    <ErrorBoundary>
      <Provider store={store}>
        <RouterProvider router={appRouter}></RouterProvider>
      </Provider>
     </ErrorBoundary>
    </>
  )
}

export default App
