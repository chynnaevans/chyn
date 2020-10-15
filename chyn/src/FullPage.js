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
import metgala from './content/MetGala.md';

/* Rants */
import rantsDesc from './content/RantsDescription.md';
import rants from './content/Rants.md';

/* WTF */
import wtf from './content/WTF.md';
import bartvlisa from './images/bartvlisa.jpg';
import coollisa from './images/cool-lisa.png';
import homerfermat from './images/homerfermat.png';
import knifeyspoony from './images/knifeyspoony.jpeg';
import milhouse from './images/milhouse.jpg';

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

const wtfImages = {
	"Cool Lisa": coollisa,
	"Everything's coming up Milhouse": milhouse,
	"Homer Fermat's Last Theorem": homerfermat,
	"Bart v Lisa": bartvlisa,
	"Knifey Spoony Game": knifeyspoony,
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
		"content": metgala,
	},
	"Random Deep Dives & Rants": {
		"description": rantsDesc,
		"images": null,
		"content": rants,
	},
	"Why Am I Here?": {
		"description": "What's going on?",
		"images": wtfImages,
		"content": wtf,
	}
}


/* ------- Code starts here -------- */

class Page extends React.Component {
	constructor(props){
		super(props);
		this.state={
			isMobile: true ? window.innerWidth <= 780 : false,
			title: 'Chynna Evans',
			description: 'Unexpected Error',
			carousel: homeImages,
			content: null,
		}
	}

	handleClick(button) {

		fetch(allContent[button]["content"])
			.then(response => {
				return response.text()
			})
			.then(text => {
				this.setState({
					content: text,
					title:button,
					description: allContent[button]["description"],
					carousel: allContent[button]["images"],
				})
			})

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
			<Content content={this.state.content} />
			</div>
			</React.Fragment>
			)

	}

	componentDidMount() {
		if(window.location.pathname === "/whyamihere") {
			this.handleClick("Why Am I Here?");
		} else {
			this.handleClick("Chynna Evans");
		}

	}
}

export { Page };