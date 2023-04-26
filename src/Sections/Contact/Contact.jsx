import React from "react";
import Heading from "../../Components/Heading/Heading";
import './Contact.css';


const Contact = () => {
    return (
        <section id="contact" className="contact_section">
            <div className="contact_heading_1">
            <Heading index='04' heading="What's Next" />
            </div>

            <h1 className="contact_heading_2">Get in touch</h1>
            <p className="contact_desc">We would love to hear from you! If you have any questions or comments,
             please don't hesitate to reach out to us.
             Email:
             <p className="contact_desc">

            For general inquiries, please email us at ankesh.pandey8@gmail.com. We will do our best to respond to your email within 24-48 hours.

             </p>

             <p className="contact_desc">

            Phone:

            If you prefer to speak with someone over the phone, 
            you can reach us at 790333-2869. Our phone support hours are Monday-Friday from 9:00am to 5:00pm IST.
             </p>
             <p className="contact_desc">

            Mailing Address:

            Social Media:

            You can also connect with us on social media. Find us on Facebook, Twitter, and Instagram.

            We look forward to hearing from you!
             </p>

            </p>
             <a href="mailto:ankesh.pandey1005@gmail.com">
                <button className="contact_btn">Say Hello</button>
             </a>
        </section>
    )
}

export default Contact;