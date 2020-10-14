import React from 'react';
import './ChynDefault.css';

class Carousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isMobile: this.props.isMobile ? this.props.isMobile !== null : false,
			images: this.props.images || null,
			title: this.props.title,
			description: this.props.description,
		};
	}

	render() {
		if(this.state.images !== null){
			return (
				<div id="carousel">
				<CarouselInfo title={this.state.title} description={this.state.description} />
				{Object.keys(this.state.images).map((img, pos) => {
					return(<img alt={img} src={this.state.images[img]} />)
				})}
				</div>
				)
		} else {
			return(
				// <div id="carousel">
				<PageBio title={this.state.title} description={this.state.description} />
				// </div>
				)
		
		}
	}
}

class CarouselInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: this.props.title,
			desc: this.props.description,
		}
	}

	render() {
			return (
				<div id="infoBox">
				<h1>{this.state.title}</h1>
				<p>{this.state.desc}</p>
				</div>
				)
		}
	}

class PageBio extends React.Component {
	constructor(props) {
		super(props);
		this.state= {
			title: this.props.title,
			desc: this.props.description,
		}
	}

	render() {
		return(
			<div id="pageBio">
				<h1><span>{this.state.title}</span></h1>
				<br/>{this.state.desc}
			<hr/>
			</div>
			)
	}
}

export { Carousel };