import React from 'react'
import Contact from '../Contact'
import Portfolio from '../Portfolio'
import Skills from '../Skills'
import Aboutme from './Aboutme'
import Home from './Home'
import Mywork from './Mywork'

function SuperHome() {
    return (
        <>
            <Home/>
            <Aboutme/>
            <Skills/>
            <Mywork/>
            <Portfolio/>
            <Contact/>
        </>
    )
}

export default SuperHome
