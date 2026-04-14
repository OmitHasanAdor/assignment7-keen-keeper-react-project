import { Children, Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import MainLayout from './layout/MainLayout.jsx'
import TimelinePage from './pages/TimelinePage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import StatsPage from './pages/StatsPage.jsx'
import FriendDetailsPage from './pages/FriendDetailsPage.jsx'
import FriendContext from './context/FriendContext.jsx'
 import { ToastContainer } from 'react-toastify';


const router =createBrowserRouter([
  {path:'/', 
  Component: MainLayout,
  children:[
     { index: true, Component: HomePage },
     {path:'/timeline', Component:TimelinePage},
     {path:'/stats',Component:StatsPage},
     {path:'/friend/:id',Component:FriendDetailsPage}
  ],
  errorElement:<ErrorPage></ErrorPage>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendContext>
 <RouterProvider router={router} />
    </FriendContext>
      <ToastContainer />
   </StrictMode>,
)
