
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ServicePage from './Pages/ServicePage'
import FeaturesPage from './Pages/FeaturesPage'
import CarPage from './Pages/CarPage'
import CarDetailsPage from './Pages/CarDetailsPage'
import TestimonialPage from './Pages/TestimonialPage'
import ErrorPage from './Pages/ErrorPage'
import PrivacyPolicyPage from './Pages/PrivacyPolicyPage'
import TermAndConditionPage from './Pages/TermAndConditionPage'
import ContactUsPage from './Pages/ContactUsPage'
import AdminHomePge from './Pages/Admin/AdminHomePge'
import AdminCategoryPage from './Pages/Admin/Category/AdminCategoryPage'
import AdminCreateCategoryPage from './Pages/Admin/Category/AdminCreateCategoryPage'
import AdminUpdateCategoryPage from './Pages/Admin/Category/AdminUpdateCategoryPage'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/service' element={<ServicePage />} />
        <Route path='/feature' element={<FeaturesPage />} />
        <Route path='/car' element={<CarPage />} />
        <Route path='/car/:id' element={<CarDetailsPage />} />
        <Route path='/testimonial' element={<TestimonialPage />} />
        <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
        <Route path='/tc' element={<TermAndConditionPage />} />
        <Route path='/contact' element={<ContactUsPage />} />

        {/* Admin routs */}
        <Route path='/admin' element={<AdminHomePge />} />

        <Route path='/admin/category' element={<AdminCategoryPage />} />
        <Route path='/admin/category/create' element={<AdminCreateCategoryPage />} />
        <Route path='/admin/category/update/:id' element={<AdminUpdateCategoryPage />} />

        <Route path='/*' element={<ErrorPage />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
