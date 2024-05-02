import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import Beranda from './pages/beranda'
import Tentang from './pages/tentang'
import Layanan from './pages/layanan'
import Portfolio from './pages/portfolio'
import Artikel from './pages/artikel'
import Konsultasi from './pages/konsultasi'
import PortfolioDetail from './pages/portfolioDetail';
import Login from './pages/login'
import BerandaDev from './pages/berandaDev'
import ArticleDev from './pages/artikelDev'
import ArtikelDetail from './pages/artikelDetail';
import DashboardDev from './pages/berandaDev';
import KonsultasiDev from './pages/konsultasiDev';
import "react-toastify/dist/ReactToastify.css";
import ArticleEdit from './pages/artikelEdit'


const router = createBrowserRouter([
  {
    path:"/",
    element: <Beranda/>,
  },
  {
    path:"/about",
    element: <Tentang/>,
  },
  {
    path:"/services",
    element: <Layanan/>,
  },
  {
    path:"/portfolio",
    element: <Portfolio/>,
  },
  {
    path:"/article",
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
  {
    path:"/login",
    element: <Login/>,
  },
  {
    path:"/developer/dashboard",
    element: <BerandaDev/>,
  },
  {
    path:"/developer/article/create",
    element: <ArticleDev/>,
  },
  {
    path:"/article/:id",
    element: <ArtikelDetail/>,
  },
  {
    path:"/developer/article/edit/:id",
    element: <ArticleEdit/>,
  },
  {
    path:"/developer/dashboard/:id",
    element: <DashboardDev/>,
  },
  {
    path:"/developer/konsultasi",
    element: <KonsultasiDev/>,
  },
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)