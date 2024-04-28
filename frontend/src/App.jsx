import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Account from './pages/Account'
import MainLayout from './layouts/MainLayout'
import SellerDashboardLayout from './layouts/SellerDashboardLayout'
import SellerDashboard from './pages/SellerDashboard'

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
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
