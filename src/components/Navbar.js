import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                         <a class="navbar-brand" href="#">Navbar</a>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <Link class="nav-link "  to="/">Form <span class="sr-only">(current)</span></Link>
                            </li>
                           
                            </ul>
                        
                        </div>
            </nav>
        </div>
    )
}

export default Navbar
