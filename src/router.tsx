import { createBrowserRouter, Navigate } from 'react-router-dom'
import RootLayout from './components/layout/RootLayout'
import Home from './pages/Home'
import Philosophy from './pages/Philosophy'
import Doctors from './pages/Doctors'
import Strengths from './pages/Strengths'
import Facility from './pages/Facility'
import Reviews from './pages/Reviews'
import Contact from './pages/Contact'
import TreatmentDetail from './pages/TreatmentDetail'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <Navigate to="/about/philosophy" replace /> },
      { path: 'about/philosophy', element: <Philosophy /> },
      { path: 'about/doctors', element: <Doctors /> },
      { path: 'about/strengths', element: <Strengths /> },
      { path: 'about/facility', element: <Facility /> },
      { path: 'treatments', element: <Navigate to="/treatments/implant" replace /> },
      { path: 'treatments/:slug', element: <TreatmentDetail /> },
      { path: 'reviews', element: <Reviews /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
])
