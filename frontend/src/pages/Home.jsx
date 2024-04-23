import React from 'react'
import Menu from '../components/Menu'
import Category from '../components/Category'
import { useSelector } from 'react-redux'

function Home() {

    const { isCategoryPanelVisible } = useSelector((state) => state.category)

    return (
        <div>
            <Menu/>
            
            <div className={`sm:hidden fixed flex justify-end h-[100vh] w-[100vw] bg-black bg-opacity-40 duration-500 transition-transform ${isCategoryPanelVisible ? '-translate-x-0' : '-translate-x-[-100%]'}`}>
                <Category />
            </div>

        </div>
    )
}

export default Home
