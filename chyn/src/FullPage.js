import React from 'react';

import { Header } from './Header.js';
import { Carousel } from './Carousel.js';

import abby from './images/abbyscuito.jpg'
import margaret from './images/margaret_hamilton.jpg'
import matt from './images/mattgroening.jpg'
import amcqueen from './images/mcqueen.jpg'
import ss99 from './images/mcqueenss99.jpg'

const testImages = {
	"Alexander McQueen SS99": ss99,
	"Abby Sciutto": abby,
	"Margaret Hamilton": margaret,
	"Alexander McQueen": amcqueen,
	"Matt Groening": matt,
}

class Page extends React.Component {
	render() {
		return(
			<React.Fragment>
			<Header isMobile={true}/>
			<Carousel images={testImages} />
			</React.Fragment>
			)
	}
}

export { Page };