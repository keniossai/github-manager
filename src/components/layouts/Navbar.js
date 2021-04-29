import React from 'react'
import { Link } from 'react-router-dom'
 
const Navbar = props => {

         return (
             <nav className="navbar bg-success">
                 <h1>{props.title}</h1>
                 <ul>
                     <li>
                         <Link to="/">Home</Link>
                     </li>
                     <li>
                         <Link to="/about">About</Link>
                     </li>
                 </ul>
             </nav>
         )
 }

 Navbar.defaultProps = {
    title: 'GitHub Finder'
}
 
 export default Navbar
 
