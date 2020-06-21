import React from 'react';
import '../App.css';



const Navbar = () => {


    return(
        <div>
            <ul>
                <li><a href="contact">Contact</a></li>
                <li><a href="https://medium.com/@carlparm" target="_blank" rel="noopener noreferrer">Blog</a></li>
                <li><a href="https://drive.google.com/file/d/1JKksq5y1iRpHEl-6xp8-SgPWRXIx8rej/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
                <li><a href="contact.asp">Portfolio</a></li>
                <li><a href="about.asp">About</a></li>
                <li><b href="http://localhost:3000/">Carl Parm</b></li>
            </ul>
        </div>
    )
}

export default Navbar;