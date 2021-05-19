import React from 'react';
import myImage from './/Images/man.jpg';

function Aboutme() {
    return (
        <>
            <div id="aboutme">
                <div className="abtme-content">
                    <div className="abtme-head">
                    <h1>About Me</h1>
                    <br/>
                    <p>Myself <b>Praveen Nathan C</b> I am a BE(ECE) Graduate</p>
                    <p>I'm a hard working and dedicated professional front-end developer/user interface designer with a keen eye for detail, and a determination to deliver the very highest quality. ... I am motivated, enthusiastic and well organised, with a keen eye for beautiful design, primarily based around user interfaces.
                    </p>
                    <br/>
                    <br/>
                    <a href="https://bumper-masters.000webhostapp.com/Praveen%20Nathan%20C.pdf" className="resume-btn" rel="noreferrer" target="_blank">Download Resume</a>
                    </div>

                    <div className="abtme-image">
                        <img src={myImage} alt="myImage"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aboutme
