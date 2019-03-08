import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Item extends Component {
	constructor(){
		super();
		this.state = {
			title: 'cancerbero',
			videoId: 'zVqC9RFwk4E',
			description: 'cancebero',
			urlimagen: 'https://i.ytimg.com/vi/zVqC9RFwk4E/default.jpg',
			valor: ''
			
		}
		this.handleSelect = this.handleSelect.bind(this);

	}
	componentDidMount(){
		this.setState({
			title: this.props.title,
			videoId: this.props.videoId,
			description: this.props.description,
			valor: this.props.valor,
			urlimagen: this.props.urlimagen
		})
	}
	componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
  if (this.props.videoId !== prevProps.videoId) {
  	this.setState({
  		title: this.props.title,
  		videoId: this.props.videoId,
  		description: this.props.description,
  		valor: this.props.valor,
  		urlimagen: this.props.urlimagen
  	})
  	
  }
}

handleSelect() {

	this.props.onSelect(this.state.videoId, this.state.title, this.state.description, this.state.valor)
}

render() {
	return (

		<Media>
		<Media left top >
		<Media object onClick={this.handleSelect} src={this.props.urlimagen} alt="Generic placeholder image"  />
		</Media>
		<Media body>
		<Media heading>
		{this.props.title}
		</Media>
		{this.props.description}   
		</Media>
		</Media>
		
		
		);
}
}

export default Item;
