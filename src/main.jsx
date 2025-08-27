import React from 'react'
import ReactDOM from "react-dom/client";
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { StrictMode } from 'react'

import './index.css'


// Pages (we’ll make them next)
import RootLayout from './layouts/RootLayout.jsx'
import Home from './pages/Home.jsx'
import BlogPost from './pages/BlogPost.jsx'
import NotFound from './pages/NotFound.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,      // top nav + <Outlet />
    children: [
      { index: true, element: <Home /> },          // /
      { path: 'blog/:slug', element: <BlogPost /> }, // /blog/some-slug
      { path: '*', element: <NotFound /> },        // catch-all
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
