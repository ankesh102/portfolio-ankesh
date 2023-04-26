import React from 'react'
import './ContactBar.css';
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"

const ContactBar = () => {
  return (
    <div className="contact_bar_wrapper">
        <div className="contact_bar">
            <a href="https://www.linkedin.com/in/ankesh-pandey8/" target="_blank"  className="contact_bar_icon">
            <LinkedInIcon />
            </a>
            <a href="https://github.com/ankesh102" target="_blank"  className="contact_bar_icon">
            <GitHubIcon />
            </a>
            <a href="https://www.instagram.com/itsankesh20/" target="_blank"  className="contact_bar_icon">
            <InstagramIcon />
            </a>
            <a href="https://twitter.com/Ankeshkumarpan3" target="_blank"  className="contact_bar_icon">
            <TwitterIcon />
            </a>
            <div className="contact_bar_line"></div>
        </div>
        <div className="contact_bar">
            <a href="mailto:ankesh.pandey1005@gmail.com" className="contact_bar_email">
                ankesh.pandey1005@gmail.com
            </a>
            <div className="contact_bar_line"></div>
        </div>
    </div>
  )
}

export default ContactBar
