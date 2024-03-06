import React from 'react'
import InfoSection from '../components/InfoSection';
import MainSection from '../components/MainSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { homeObjOne, homeObjTwo } from '../components/InfoSection/Data'
import Footer from '../components/Footer';

const Home = () => {

    const [isOpen, setIsOpen] = React.useState(false)

    const openTrigger = () => {
        setIsOpen(!isOpen) // true
    }

    return (
        <>
            <Navbar openTrigger={openTrigger} />
            <Sidebar isOpen={isOpen} openTrigger={openTrigger} />
            <MainSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Footer />
        </>
    )
}

export default Home