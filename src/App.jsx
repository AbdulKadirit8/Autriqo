
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

import AdminBrandPage from './Pages/Admin/Brand/AdminBrandPage'
import AdminCreateBrandPage from './Pages/Admin/Brand/AdminCreateBrandPage'
import AdminUpdateBrandPage from './Pages/Admin/Brand/AdminUpdateBrandPage'

import AdminFeaturePage from './Pages/Admin/Feature/AdminFeaturePage'
import AdminCreateFeaturePage from './Pages/Admin/Feature/AdminCreateFeaturePage'
import AdminUpdateFeaturePage from './Pages/Admin/Feature/AdminUpdateFeaturePage'

import AdminServicePage from './Pages/Admin/Service/AdminServicePage'
import AdminCreateServicePage from './Pages/Admin/Service/AdminCreateServicePage'
import AdminUpdateServicePage from './Pages/Admin/Service/AdminUpdateServicePage'

import AdminFaqPage from './Pages/Admin/Faq/AdminFaqPage'
import AdminCreateFaqPage from './Pages/Admin/Faq/AdminCreateFaqPage'
import AdminUpdateFaqPage from './Pages/Admin/Faq/AdminUpdateFaqPage'


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

        {/* Category */}
        <Route path='/admin/category' element={<AdminCategoryPage />} />
        <Route path='/admin/category/create' element={<AdminCreateCategoryPage />} />
        <Route path='/admin/category/update/:id' element={<AdminUpdateCategoryPage />} />

        {/* Brand */}
        <Route path='/admin/brand' element={<AdminBrandPage />} />
        <Route path='/admin/brand/create' element={<AdminCreateBrandPage />} />
        <Route path='/admin/brand/update/:id' element={<AdminUpdateBrandPage />} />

        {/* Feature */}
        <Route path='/admin/feature' element={<AdminFeaturePage />} />
        <Route path='/admin/feature/create' element={<AdminCreateFeaturePage />} />
        <Route path='/admin/feature/update/:id' element={<AdminUpdateFeaturePage />} />

        {/* Service */}
        <Route path='/admin/service' element={<AdminServicePage />} />
        <Route path='/admin/service/create' element={<AdminCreateServicePage />} />
        <Route path='/admin/service/update/:id' element={<AdminUpdateServicePage />} />

        {/* Faq */}
        <Route path='/admin/faq' element={<AdminFaqPage />} />
        <Route path='/admin/faq/create' element={<AdminCreateFaqPage />} />
        <Route path='/admin/faq/update/:id' element={<AdminUpdateFaqPage />} />

        <Route path='/*' element={<ErrorPage />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
