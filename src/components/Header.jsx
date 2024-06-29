
import "../styles/App.scss"
import "../styles/Header.scss"

import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'




function Header() {
  return (
  
    <nav>
        <div>
            <img src="src\assets\logo2.jpg" id="logo" alt="logo"/>
            <span> Furniture Kingdom</span>
        </div>
        <main>
            <HashLink to={"/#home"}>Home</HashLink>
            <HashLink to={"/#about"}>About</HashLink>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/login"}>Sign In/SignUp</Link>
        </main>
        
    </nav>
  )
}

export default Header