import React from 'react'
import './Head.css'


class Head extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			height:window.innerHeight
		}
	}

	render() {
		let myStyle = {height:this.state.height}
		return (
			<div id = "banner" className = "jumbotron jumbotron-fluid" style = {myStyle}>
				<div className = "container-fluid">
					<h1 className="fall stroke"> Emeowtional </h1>
					<p className="fall stroke"> Your purrfect therapy session </p>
					<button className="book slide stroke"> Book now </button>
				</div> 

			</div>
		)
	}

	componentDidMount() {
		window.addEventListener('resize', () => {
			this.setState({height:window.innerHeight})
		})
	}
}

export default Head