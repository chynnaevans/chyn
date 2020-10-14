import React from 'react';
import './ChynDefault.css';

class Carousel extends React.Component {
	render() {
		if(this.props.images !== null){
			return (
				<div id="carousel">
				<CarouselInfo title={this.props.title} description={this.props.description} />
				{Object.keys(this.props.images).map((img, pos) => {
					return(<img alt={img} src={this.props.images[img]} />)
				})}
				</div>
				)
		} else {
			return(
				<PageBio title={this.props.title} description={this.props.description} />
				)
		
		}
	}
}

class CarouselInfo extends React.Component {
	render() {
			return (
				<div id="infoBox">
				<h1>{this.props.title}</h1>
				<p>{this.props.description}</p>
				</div>
				)
		}
	}

class PageBio extends React.Component {
	render() {
		return(
			<div id="pageBio">
				<h1><span>{this.props.title}</span></h1>
				<br/>{this.props.description}
			<hr/>
			</div>
			)
	}
}

export { Carousel };