import React from 'react';
import{FaLinkedin,FaBehanceSquare,FaDribbbleSquare} from 'react-icons/fa';
import{AiFillInstagram} from 'react-icons/ai'


function Footer() {
    return (
        <>
        
        <div id="footer">
            <div>
                <div className="f-head">
                <h1>Pn<span>.</span></h1>
                </div>
                <br/>

                <h3>Follow Me On</h3>
                <div className="f-icon">
                    <div>
                    <a href="https://www.linkedin.com/in/praveen-nathan-c-8532a3101" rel="noreferrer" target="_blank"><FaLinkedin/></a>
                    <a href="https://dribbble.com/praveennathanc" rel="noreferrer" target="_blank"><AiFillInstagram/></a>
                    <a href="https://www.behance.net/praveenchokkar" rel="noreferrer" target="_blank"><FaBehanceSquare/></a>
                    <a href="https://dribbble.com/praveennathanc" rel="noreferrer" target="_blank"><FaDribbbleSquare/></a>
                    </div>
                    
                </div>
                <hr></hr>
                <p>Website Developed By Praveen Nathan C</p>
            </div>  
        </div>
             
        </>
    )
}

export default Footer
