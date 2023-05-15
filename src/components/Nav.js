import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'

import {NavLink} from 'react-router-dom'
export default function Navs() {
    return (
//         <Navbar bg="light" expand="lg">
//   <a className="navbar-brand" href="#">Optimitic Coder</a>
//   <button  className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span  className="navbar-toggler-icon "></span>
//   </button>

//   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul className="navbar-nav ml-auto">
//       <li className="nav-item active">
//         <NavLink  exact activeClassName="menu_active" className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
//       </li>
//       <li className="nav-item active">
//         <NavLink  exact activeClassName="menu_active" className="nav-link" to="/about">About <span className="sr-only">(current)</span></NavLink>
//       </li>
//       <li className="nav-item active">
//         <NavLink  exact activeClassName="menu_active" className="nav-link" to="/service">Service <span className="sr-only">(current)</span></NavLink>
//       </li>
      
     
    
//     </ul>
   
//   </div>
// </Navbar>
<Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Optimitic Coder</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ml-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
    
            <Nav.Link href="/service">
              Skills
            </Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
