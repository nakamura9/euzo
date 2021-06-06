import React from 'react'

const Footer = (props) => {
    return (
        <footer>
            <div className="footer-links">
                <div></div>
                <div>
                    <h4>Services</h4>
                    <ul>
                        <li>Dental</li>
                    </ul>
                </div>
                <div>
                    <h4>Pages</h4>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Our Partners</li>
                        <li>News</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div className='footer-copyright'>MedHaven C. 2021 All rights Reserved </div>
        </footer>
    )
}

export default Footer