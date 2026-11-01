import React from 'react'
import Navbar from './ComponentJSX/Navbar'
import Hero from './ComponentJSX/Hero'
import Status from './ComponentJSX/Status'
import LoreSections from './ComponentJSX/LoreSections'
import Skills from './ComponentJSX/Skills'
import Weapons from './ComponentJSX/Weapons'
import Footer from './ComponentJSX/Footer'

const App = () => {
    return (
        <>
            {/* 1. TOP NAVBAR */}
            <Navbar position="top" />

            <Hero />
            <Status />
            <LoreSections />
            <Skills />
            <Weapons />
            <Footer />

            {/* 2. BOTTOM NAVBAR (Mobile App Dock) */}
            <Navbar position="bottom" />
        </>
    )
}

export default App