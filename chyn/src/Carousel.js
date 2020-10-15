import React from 'react';
import './ChynDefault.css';

import ReactMarkdown from 'react-markdown';

class Carousel extends React.Component {
	render() {
		if(this.props.images !== null){
			return (
				<div id="carousel">
				<CarouselInfo title={this.props.title} description={this.props.description} />
				{Object.keys(this.props.images).map((img, pos) => {
					return(<img key={img} alt={img} src={this.props.images[img]} />)
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
	constructor(props){
		super(props);
		this.state = {
			description: null,
		}
	}
	render() {
		return(
			<div id="pageBio">
				<h1><span>{this.props.title}</span></h1>
				<ReactMarkdown source={this.state.description}/>
			<hr/>
			</div>
			)
	}

	componentDidMount() {
		const readPath = this.props.description;
		fetch(readPath)
			.then(response => {
				return response.text()
			})
			.then(text => {
				this.setState({
					description: text
				})
			})
	}
}

export { Carousel };