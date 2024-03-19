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
import DashboardDev from './pages/dashbordDev';
import KonsultasiDev from './pages/konsultasiDev';
import "react-toastify/dist/ReactToastify.css";


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
  {
    path:"/login",
    element: <Login/>,
  },
  {
    path:"/berandaDev",
    element: <BerandaDev/>,
  },
  {
    path:"/articleDev",
    element: <ArticleDev/>,
  },
  {
    path:"/artikel/:id",
    element: <ArtikelDetail/>,
  },
  {
    path:"/dashboardDev/:id",
    element: <DashboardDev/>,
  },
  {
    path:"/konsultasiDev",
    element: <KonsultasiDev/>,
  },

])

const MainRouter = () => {
  // const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await axios.post("http://localhost:3000/verifyUser", {}, { withCredentials: true });
        if (!response.data.loggedIn) {
          // navigate("/login");
          window.location.href = "/login";
        }
      } catch (error) {
        console.error("Error verifying user:", error);
        window.location.href = "/login";
      }
    };

    verifyUser();
  }, []);

  return (
    <RouterProvider router={router} />
  );
};


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainRouter/>
  </React.StrictMode>,
)
