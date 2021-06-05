import React from 'react'

const Nav = (props) => {
    return (
        <nav>
            <a href="/"><img src="/images/logo.png" /> </a>

            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Our Partners</li>
                <li>News</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Nav