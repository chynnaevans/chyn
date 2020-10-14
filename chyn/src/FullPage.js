import React from 'react';

import { Header } from './Header.js';
import { Carousel } from './Carousel.js';
import { Content } from './PageContent.js';

/* Home */ 
import abby from './images/abbyscuito.jpg';
import margaret from './images/margaret_hamilton.jpg';
import matt from './images/mattgroening.jpg';
import amcqueen from './images/mcqueen.jpg';
import ss99 from './images/mcqueenss99.jpg';
import home from './content/home.md';

/* Met Gala */
import sjp from './images/11-sjp-savagebeauty.jpg';
import renee from './images/12-reneezellweger.jpg';
import beyonce from './images/13-beyonce-punk.jpg';
import blake from './images/14-blakelively.jpeg';
import zendaya from './images/15-zendaya.jpg';

/* Rants */
import rantsDesc from './content/RantsDescription.md';

const homeImages = {
	"Alexander McQueen SS99": ss99,
	"Abby Sciutto": abby,
	"Margaret Hamilton": margaret,
	"Alexander McQueen": amcqueen,
	"Matt Groening": matt,
}

const metImages = {
	"Sarah Jessica Parker 2011": sjp,
	"Renee Zellweger 2012": renee,
	"Beyonce 2013": beyonce,
	"Blake Lively 2014": blake,
	"Zendaya 2015": zendaya,
}

const allContent = {
	"Chynna Evans": {
		"description": "The TL;DR",
		"images": homeImages,
		"content": home,
	},
	"Met Gala 2020": {
		"description": "In loving memory",
		"images": metImages,
		"content": null,
	},
	"Random Deep Dives & Rants": {
		"description": rantsDesc,
		"images": null,
	}
}


/* ------- Code starts here -------- */

class Page extends React.Component {
	constructor(props){
		super(props);
		this.state={
			isMobile: true ? window.innerWidth <= 780 : false,
			title: 'Chynna Evans',
			description: 'The TL;DR',
			carousel: homeImages,
			content: allContent["Chynna Evans"]["content"],
		}
	}

	handleClick(button) {
		if(allContent[button]["content"] !== null) {
			this.setState({
					title:button,
					description: allContent[button]["description"],
					carousel: allContent[button]["images"],
					content: allContent[button]["content"],
					});
		} else {
			this.setState({
					title:button,
					description: allContent[button]["description"],
					carousel: allContent[button]["images"],
					});
			//TODO: <MetGalaRSS url="https://amateurish.tumblr.com/tagged/metgalaoutfits/rss" title="All Time Best Dressed" />
		}

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
			<Carousel title={this.state.title} description={this.state.description} images={this.state.carousel}/>
			<Content contentSource={home} />
			</div>
			</React.Fragment>
			)

	}

}

export { Page };