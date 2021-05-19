import React,{useState,useEffect} from 'react';
import {HiDotsCircleHorizontal,HiXCircle} from 'react-icons/hi';
import{HashLink as Link} from 'react-router-hash-link';

function Navbar() {

    const[micon,setMicon] = useState(true)
    const[nav,setNav] = useState(true)
    const iconHandler=(e)=>
    {
        setMicon(!micon);
        setNav(!nav)
    }
    useEffect(()=>
    {
        if(window.innerWidth<=850)
        {
            setNav(false)
        }
    },[])
    const navHandler=()=>
    {
        if(window.innerWidth <= 850 )
        {
            setNav(false)
            setMicon(true)
        }
        else
        {
            setNav(true)
        }
    }
    const closeHandler=()=>
    {
        if(window.innerWidth <= 850)
        {
            setNav(false)
            setMicon(true)
        }
       
    }
    window.addEventListener('resize',navHandler)

    return (
        <>
          <nav className="navbar">

              <div className="menu-bar" onClick={iconHandler}>
                  {
                        micon ? <HiDotsCircleHorizontal/> :<HiXCircle/> 
                  }
              </div>
              <li className="nav-logo"><a href="#Home" className="nav-link"  rel="norefferer">Pn<span>.</span></a></li>
              <div className="navbar-list">
                  {
                      nav 
                      ? <ul className="navbar-nav">
                      <li className="nav-item" onClick={closeHandler}><Link smooth to="/#home" className="nav-link" rel="norefferer">Home</Link></li>
                      <li className="nav-item" onClick={closeHandler}><Link smooth to="/#aboutme" className="nav-link"  rel="norefferer">About Me</Link></li>
                      <li className="nav-item" ><Link to="/" className="nav-link">Pn<span>.</span></Link></li>
                      <li className="nav-item" onClick={closeHandler}><Link smooth to="/#portfolio" className="nav-link"  rel="norefferer">Portfolio</Link></li>
                      <li className="nav-item" onClick={closeHandler}><Link smooth to="/#contact" className="nav-link">Contact</Link></li>
                  </ul> : null 
                  }
                 
              </div>
              </nav>  
        </>
    )
}

export default Navbar
