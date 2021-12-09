import React from 'react'
import './contact.css'
const ContactUs = () => {
    return (
            <div >
                <div className="flex_contact">
                    <div className="aka">
                        <div className="flex2s">
                                <h1 className="wes">How Can We Help You With Your HVAC Needs?</h1>
                                <form>
                                <input className="inp" type="text" placeholder="Name"/>
                                <input className="inp" type="text" placeholder="Email" />
                                <input className="inp" type="text" placeholder="Address Line 1"/>
                                <input className="inp" type="text" placeholder="Address Line 2 (optional)"/>
                                <input className="inp" type="text" placeholder="City"/>
                                <input className="inp" type="text" placeholder="State"/>
                                <input className="inp" type="text" placeholder="Zip"/>
                                <input className="inp" type="number" placeholder="Phone"/>
                                <textarea className="message_inp" type="text" placeholder="Leave a detailed message 
                                and a service technicial will be with you within 24hrs!"/>
                                <button className="contactUsbtn" type="submit">Send</button>
                                </form>
                               
                        </div>
                    </div>
                    <div className="wid">
                        <h1 className="fill">Servicing Every Brand Under the Stars! Est. 2017</h1>
                        <p className="we">We're here to help your with all of your heating and cooling service, repair, and installation needs. </p>
                        <p className="central">Gemini Heating & Cooling.</p>
                        <p className="we">
                        <br />4110 Autumn Hill ln.
                        <br />Hamilton.
                        <br />Ohio
                        <br />45011</p>
                        <p className="we"><a href="tel:5136089137">(513) 608-9137</a></p>
                    </div>
                </div>
            </div>
    )
}
export default ContactUs