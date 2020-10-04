import React from 'react'
import './Menu.css'
class Menu extends React.Component {

	render() {
		return (
			<nav className = "navbar navbar-expand-md  sticky-top">
				
				<a className="navbar-brand" href="#banner">
					<img src = '/navpaw.png' style={{maxWidth:20,marginRight:5}} alt="navpaw"/>
					Emeowtional
				</a>

				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    				<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-menu-button-wide-fill" fill="white" xmlns="http://www.w3.org/2000/svg">
  						<path fillRule="evenodd" d="M14 7H2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zM2 6a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H2z"/>
 						<path fillRule="evenodd" d="M15 11H1v-1h14v1zM2 12.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM1.5 0A1.5 1.5 0 0 0 0 1.5v2A1.5 1.5 0 0 0 1.5 5h13A1.5 1.5 0 0 0 16 3.5v-2A1.5 1.5 0 0 0 14.5 0h-13zm1 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm9.927.427l.396.396a.25.25 0 0 0 .354 0l.396-.396A.25.25 0 0 0 13.396 2h-.792a.25.25 0 0 0-.177.427z"/>
					</svg>
  				</button>

				<div className="collapse navbar-collapse" id="collapsibleNavbar">
    				<ul className="nav navbar-nav ml-auto">
      					<li className="nav-item">
       	 					<a className="nav-link" href="#about-us">About us</a>
      					</li>
      					<li className="nav-item">
        					<a className="nav-link" href="#services">Services</a>
      					</li>
      					<li className = "nav-item">
      						<a className="nav-link" href = "#reviews"> Reviews </a>
      					</li>
      					<li className ="nav-item">
      						<a className="nav-link" href="#pricing"> Pricing </a>
      					</li>
     	 				<li className="nav-item">
        					<a className="nav-link" href="#map">Contact</a>
      					</li>
    				</ul>
  				</div>
			</nav>
		)
	}
}

export default Menu

