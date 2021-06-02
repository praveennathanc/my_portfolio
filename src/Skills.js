import React from 'react'

function Skills() {
    return (
        <>
            <div id="Skills">
            <h1 className="skill-heading">Skills</h1>
            <div  className="skill-content">
            <div>
                <div className="skill-c">
                <h3>HTML & CSS</h3>
                    <div className="skill-progressbar">
                        <div className="pb-c" style={{width:'90%'}}> 
                        </div>
                    </div>
                    <p className="s-per">90%</p>
                </div>

                <div className="skill-c">
                    <h3>JAVASCRIPT</h3>
                    <div className="skill-progressbar">
                        <div className="pb-c" style={{width:'50%'}}> 
                        </div>
                    </div>
                    <p className="s-per">50%</p>
                </div>

                <div className="skill-c">
                    <h3>BOOTSTRAP</h3>
                    <div className="skill-progressbar" >
                        <div className="pb-c" style={{width:'85%'}}> 
                        </div>
                    </div>
                    <span className="s-per">85%</span>
                </div>


                <div className="skill-c">
                    <h3>REACT JS</h3>
                    <div className="skill-progressbar">
                        <div className="pb-c" style={{width:'60%'}}> 
                        </div>
                    </div>
                    <p className="s-per">60%</p>
                </div>
                <div className="skill-c">
                    <h3>ILLUSTRATION</h3>
                    <div className="skill-progressbar" >
                        <div className="pb-c" style={{width:'70%'}}> 
                        </div>
                    </div>
                    <p className="s-per">70%</p>
                </div>
                </div>
            </div>
               

                
            </div>
        </>
    )
}

export default Skills
