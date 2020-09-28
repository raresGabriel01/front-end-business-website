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
			<div className = "jumbotron jumbotron-fluid" style = {myStyle}>
				<div className = "container-fluid">
					<h1 className="fall"> Emeowtional </h1>
					<p className="fall"> Your purrfect therapy session </p>
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