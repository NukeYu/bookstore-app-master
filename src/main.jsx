import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'

import HomePage from './pages/HomePage'
import EditBookPage from './pages/EditBookPage'
import BookContextProvider from './context/BookContext'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/edit/:id',
    element: <EditBookPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <BookContextProvider>
    <ConfigProvider>
      <RouterProvider router={router} />
    </ConfigProvider>
  </BookContextProvider>
)
