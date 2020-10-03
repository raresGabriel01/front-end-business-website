import React from 'react'
import './Services.css'


class Services extends React.Component {
	constructor(props){
		super(props)
		this.state = {

		}
	}

	render() {
		return (
			<div className = "container-fluid bg-light section" id = "services">
				<div className="row" >
					<div className="col-md-4 image-column " id ="services-1">
						<img src='/paw.png' className="logo animation left"/>
					</div>

					<div className="col-md-8 animation right" id = "services-2">
						<h2> What do we offer ? </h2>
						<p> Our company provides a set of unique cat therapy sessions in which.... </p>
						<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet lacus a orci consectetur, nec finibus felis convallis. Etiam consectetur nibh sit amet ligula tempus, ut mollis orci imperdiet. Phasellus elementum neque quis metus rutrum faucibus. Praesent scelerisque, mauris et consequat bibendum, augue lorem imperdiet urna, sit amet imperdiet erat enim et leo. Praesent et orci in metus varius vestibulum sed nec sapien. Praesent in posuere nisl. Donec feugiat facilisis libero, nec sagittis arcu ullamcorper a. Etiam sed laoreet orci. Nullam vitae justo quam. Mauris erat lacus, luctus sit amet rutrum sit amet, ornare quis libero. </p>
					</div>
				</div>
			</div>
		)
	}
}


export default Services