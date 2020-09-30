import React from 'react'
import './PricePanel.css'

class PricePanel extends React.Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}

	render() {
		return (
			<div className="col-sm-4">
				<div className="card text-center">
					<div className = "card-header">
						<h2> {this.props.title} </h2>
					</div>
					<div className ="card-body">
						<img className="img-fluid img-thumbnail" src= {this.props.img}/>
						<p> Description: {this.props.description} </p>
						<p> Price: {this.props.price} </p>
						<p> Number of sessions: {this.props.numberOfSessions} </p> 
					</div>
					<div className ="card-footer">
						<button className = "buyButton"> Buy now </button>
					</div>
				</div>
			</div>
		)
	}
}

export default PricePanel