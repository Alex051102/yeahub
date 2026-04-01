import { useState } from 'react'

import './App.css'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './appRouter'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  
  return (
    <>
    <Provider store={store}>
      <RouterProvider router={appRouter}></RouterProvider>
    </Provider>
     
    </>
  )
}

export default App
