import React from 'react'
import Menu from '../../components/user/Menu'
import HeroSection from '../../components/user/HeroSection'
import HeaderBar from '../../components/user/HeaderBar'

function Home() {
    return (
        <div>
            <div className='hidden sm:inline'>
                <Menu/>            
            </div>

            <div className='sm:hidden'>
                <HeaderBar />
            </div>

            <div className='p-5 sm:pt-0'>
                <HeroSection />
            </div>

        </div>
    )
}

export default Home
