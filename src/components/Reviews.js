import React from 'react'
import './Reviews.css'

class Reviews extends React.Component {
	constructor(props){
		super(props)
		this.state = {

		}
	}

	render() {
		return (
			<div id="demo" className="carousel slide" data-ride="carousel" >	

				<ul className = "carousel-indicators">
					<li data-target="#demo" data-slide-to="0" className="active"></li>
					<li data-target="#demo" data-slide-to="1" ></li>
					<li data-target="#demo" data-slide-to="2" ></li>
				</ul>

				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src='/carousel1.jpg' />
						<div className="carousel-caption text-center stroke">
    						<h3>"The greatest therapy sessions I have ever had"</h3>
    						<p> - Jenny P. </p>
  						</div>
					</div>
					<div className="carousel-item">
						<img src ="/carousel2.jpg" />
						<div className="carousel-caption text-center stroke">
    						<h3>"A hard to forget experience"</h3>
    						<p > - Steve O. </p>
  						</div>
					</div>
					<div className="carousel-item">
						<img src='/carousel3.jpg' />
						<div className="carousel-caption text-center stroke">
    						<h3>"I felt like lorem ipsum"</h3>
    						<p> - Andrew T. </p>
  						</div>
					</div>
				</div>

				<a className="carousel-control-prev" href="#demo" data-slide="prev">
					<span className="carousel-control-prev-icon"></span>
				</a>

				<a className="carousel-control-next" href="#demo" data-slide="next">
					<span className="carousel-control-next-icon"></span>
				</a>

			</div>
		)
	}
}

export default Reviews