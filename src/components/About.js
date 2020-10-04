import React from 'react'
import './About.css'

class About extends React.Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}

	render() {
		return (
			<div className="container-fluid section " id="about-us">
				<div className="row">
					<div className = "col-md-8 animation left" id = "about-1">
						<h2> Who are we ?</h2>
						<p> Our team of prefessioanl therapists offer an unique way of dealing with your daily mental struggels: therapy with cats</p>
						<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet lacus a orci consectetur, nec finibus felis convallis. Etiam consectetur nibh sit amet ligula tempus, ut mollis orci imperdiet. Phasellus elementum neque quis metus rutrum faucibus. Praesent scelerisque, mauris et consequat bibendum, augue lorem imperdiet urna, sit amet imperdiet erat enim et leo. Praesent et orci in metus varius vestibulum sed nec sapien. Praesent in posuere nisl. Donec feugiat facilisis libero, nec sagittis arcu ullamcorper a. Etiam sed laoreet orci. Nullam vitae justo quam. Mauris erat lacus, luctus sit amet rutrum sit amet, ornare quis libero. </p>
						
					</div>
					<div className ="col-md-4 image-column" id ="about-2">
						<img src ='/about-cat.png' className="logo animation right"/>
					</div>	
				</div>
			</div>
		)
	}
}

export default About