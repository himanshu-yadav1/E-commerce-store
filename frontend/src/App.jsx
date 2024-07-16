import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/user/Home'
import SignUp from './pages/user/SignUp'
import SignIn from './pages/user/SignIn'
import Account from './pages/user/Account'
import MainLayout from './layouts/MainLayout'
import SellerDashboardLayout from './layouts/SellerDashboardLayout'
import SellerDashboard from './pages/seller/SellerDashboard'
import ListedProducts from './pages/seller/ListedProducts'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />}/>
          <Route path='signup' element={<SignUp />}/>
          <Route path='signin' element={<SignIn />}/>
          <Route path='account' element={<Account />}/>
        </Route>

        <Route path="/seller" element={<SellerDashboardLayout />}>
          <Route path='dashboard' element={<SellerDashboard />}/>
          <Route path='listed-products' element={<ListedProducts />}/>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
