import React from 'react'
import './Pricing.css'
import PricePanel from './PricePanel.js'

class Pricing extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			offers : [
				{
					title:"Normal",
					img:'/offer1.jpg',
					description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet lacus a orci consectetur, nec finibus felis convallis.",
					price:"$300 / month",
					numberOfSessions:10
				},
				{
					title:"Special",
					img:'/offer2.png',
					description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet lacus a orci consectetur, nec finibus felis convallis.",
					price:"$400 / month",
					numberOfSessions: 15
				},
				{
					title:"Premium",
					img:'/offer3.jpg',
					description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet lacus a orci consectetur, nec finibus felis convallis.",
					price:"$500 / month",
					numberOfSessions: 18
				}
			]
		}
	}

	render() {
		let pricePanels = this.state.offers.map(offer => <PricePanel key = {offer.title} 
																	title = {offer.title}
																	img = {offer.img}
																	description = {offer.description} 
																	price = {offer.price} 
																	numberOfSessions = {offer.numberOfSessions}/>)
		return (
			<div className ="container-fluid section" id = "pricing">
				<div className = "row">
					{pricePanels}
				</div>
			</div>
		)
	}
}


export default Pricing