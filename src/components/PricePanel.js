import React from 'react'
import './PricePanel.css'

class PricePanel extends React.Component {

	render() {
		let dict = {
			"Normal":"left",
			"Special":"bottom",
			"Premium":"right"
		}
		return (
			<div className="col-md-4 price-panel">
				<div className={"card text-center animation " + dict[this.props.title]} style={{margin:"0 50px 0 50px"}}>
					<div className = "card-header">
						<h2> {this.props.title} </h2>
					</div>
					<div className ="card-body">
						<img className="img-fluid img-thumbnail" src= {this.props.img} alt="pricepanelimg"/>
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