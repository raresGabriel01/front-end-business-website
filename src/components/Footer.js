import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import {faFacebookSquare, faGithub,faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'

class Footer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}

	render() {
		return (
			<footer>
				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-6 text-center">
							<div style={{display:"flex", flexDirection:"column"}}>
								<p><FontAwesomeIcon icon = {faMapMarkerAlt} size ="lg"/> Lorem ipsum location </p>
								<p><FontAwesomeIcon icon = {faPhoneAlt} size="lg"/> 0748 081 287 </p>
								<p><FontAwesomeIcon icon ={faEnvelope} size="lg"/> baesu_r@yahoo.com </p>
								<p>
									<a target ="_blank" href = "https://www.linkedin.com/in/băeşu-rareş-gabriel-162a9a1a3/">
										<FontAwesomeIcon icon={faLinkedin} size="lg" className ="socialMedia"/>
									</a>
									<a target ="_blank" href= "https://github.com/raresGabriel01">
										<FontAwesomeIcon icon = {faGithub} size="lg" className="socialMedia"/>
									</a>
									<a target ="_blank" href= "https://www.facebook.com/raresgabriel.baesu/">
										<FontAwesomeIcon icon={faFacebookSquare} size="lg" className = "socialMedia"/>
									</a>
									<a target ="_blank" href= "https://www.instagram.com/rares.01/">
										<FontAwesomeIcon icon={faInstagram} size="lg" className="socialMedia"/>
									</a>
									
									
									
								</p>
							</div>
						</div>

						<div className="col-sm-6">
							<h3> Lorem ispum </h3>
							<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-12 text-center copyright">
							<p> &copy; Băeşu Rareş Gabriel 2020 - present </p>
						</div>
					</div>
				</div>
				
			</footer>
		)
	}
}


export default Footer