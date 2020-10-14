import React from 'react';

import { Header } from './Header.js';
import { Carousel } from './Carousel.js';
import { Content } from './PageContent.js';

/* Home */ 
import abby from './images/abbyscuito.jpg'
import margaret from './images/margaret_hamilton.jpg'
import matt from './images/mattgroening.jpg'
import amcqueen from './images/mcqueen.jpg'
import ss99 from './images/mcqueenss99.jpg'

import home from './content/home.md'

const testImages = {
	"Alexander McQueen SS99": ss99,
	"Abby Sciutto": abby,
	"Margaret Hamilton": margaret,
	"Alexander McQueen": amcqueen,
	"Matt Groening": matt,
}

class Page extends React.Component {
	constructor(props){
		super(props);
		this.state={
			isMobile: true ? window.innerWidth <= 780 : false,
			title: 'Chynna Evans',
			description: 'The TL;DR',
			carousel: testImages,
		}
	}

	handleClick(button) {
		this.setState({title:button});
	}

	render() {
		return(
			<React.Fragment>
			<Header 
				isMobile={this.state.isMobile} 
				title={this.state.title}
				homeClick={() => this.handleClick("Chynna Evans")} 
				metClick={() => this.handleClick("Met Gala 2020")}
				rantsClick={() => this.handleClick("Random Deep Dives & Rants")}
				/>
			<div id="container">
			<Carousel title={this.state.title} description={this.state.description} images={testImages}/>
			<Content contentSource={home} />
			</div>
			</React.Fragment>
			)

	}

}

export { Page };