import React from 'react'
import Navbar from './ComponentJSX/Navbar'
import Hero from './ComponentJSX/Hero'
import LoreSections from './ComponentJSX/LoreSections'
import Skills from './ComponentJSX/Skills'
import Status from './ComponentJSX/Status'
import Weapons from './ComponentJSX/Weapons'

const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Status />
            <LoreSections />
            <Skills />
            <Weapons />
        </>
    )
}

export default App