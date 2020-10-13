import React from 'react';
import './ChynDefault.css';

class Carousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isMobile: this.props.isMobile ? this.props.isMobile !== null : false,
			hasCarousel: false ? this.props.images === null : true,
		};
	}
	render() {
		return (
			<div id="carousel">
			{Object.keys(this.props.images).map((img, pos) => {
				return(<img alt={{img}} src={this.props.images[img]} />)
			})}
			</div>
			)
		
	}
}

export { Carousel };