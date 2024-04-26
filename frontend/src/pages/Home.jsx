import React from 'react'
import Menu from '../components/Menu'
import HeroSection from '../components/HeroSection'
import HeaderBar from '../components/HeaderBar'

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
