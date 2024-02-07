import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Beranda from './pages/beranda'
import Tentang from './pages/tentang'
import Layanan from './pages/layanan'
import Portfolio from './pages/portfolio'
import Artikel from './pages/artikel'
import Konsultasi from './pages/konsultasi'
import PortfolioDetail from './pages/portfolioDetail';


const router = createBrowserRouter([
  {
    path:"/",
    element: <Beranda/>,
  },
  {
    path:"/tentang",
    element: <Tentang/>,
  },
  {
    path:"/layanan",
    element: <Layanan/>,
  },
  {
    path:"/portfolio",
    element: <Portfolio/>,
  },
  {
    path:"/artikel",
    element: <Artikel/>,
  },
  {
    path:"/konsultasi",
    element: <Konsultasi/>,
  },
  {
    path:"/portfolio/:id",
    element: <PortfolioDetail/>,
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
