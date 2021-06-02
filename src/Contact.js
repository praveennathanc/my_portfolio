import React from 'react'

function Contact() {
    return (
        <>
            <div id="contact">
            <h1 className="contact-title">Contact</h1>
                <div className="cc">
                    <div className="contact-c">
                            <div className="msg-box">
                                <form action="mailto:cpnathan1991@gmail.com" method="post">
                                    <input type="text" placeholder="Enter Your First Name" name="name" required></input>
                                    <input type="text" placeholder="Enter Your Last Name" name="lastname" required></input>
                                    <input type="email" placeholder="Enter Your Email"  name="emailid"required></input>
                                    <input type="tel" placeholder="Enter Your Phone No" pattern="[0-9]{10}" name="Phone No" required></input>
                                    <br></br>
                                    <textarea placeholder="Enter Your Message Here" required name="message"></textarea>

                                    <button type="submit">Submit</button>
                                </form>
                               
                            </div>
                    </div>

                    <div className="contact-details">
                        <h3>Phone No:</h3>
                        <p>+91-7708803238</p>
                        <br/>
                        <h3>Email Id:</h3>
                        <p>cpnathan1991@gmail.com</p>

                        <br/>
                        <h3>Location</h3>
                        <p>Chennai</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
