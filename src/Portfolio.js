import React from 'react';


function Portfolio() {
    return (
        <>
       
            <div id="portfolio">
                <div>
                <h1 className="pf-title">Portfolio</h1>
                    <div className="pf-content">
                    <div className='pf-data'>
                        <div className="pf-image1">
                            
                        </div>
                        <div className="pf-c">
                            <h1>Websites</h1>
                            <p>Here, I have developed few demo adorable websites, which are more responsive and it can adjustable to any screen resolution. </p>
                            <br/>
                            <a href="https://bumper-masters.000webhostapp.com/myportfolio.html" className="pf-btn" target="_blank" rel="noreferrer">View More</a>
                        </div>
                    </div>

                    <div className='pf-data'>
                       
                        <div className="pf-c">
                        <h1>UI Designs</h1>
                            <p>Here, I have developed UI Designs and Mockups for wesites</p>
                            <br/>
                            <a href="#" className="pf-btn">View More</a>
                        </div>

                        <div className="pf-image2">
                            
                            </div>
                    </div>

                    <div className='pf-data'>
                        <div className="pf-image3">
                            
                        </div>
                        <div className="pf-c">
                        <h1>Illustrations</h1>
                            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                            <br/>
                            <a href="#" className="pf-btn">View More</a>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Portfolio
