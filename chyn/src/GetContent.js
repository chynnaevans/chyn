import React from 'react'

/* Home */ 
import abby from './images/abbyscuito.jpg'
import margaret from './images/margaret_hamilton.jpg'
import matt from './images/mattgroening.jpg'
import amcqueen from './images/mcqueen.jpg'
import ss99 from './images/mcqueenss99.jpg'

import home from './content/home.md'

/* Met Gala */
import sjp from './images/11-sjp-savagebeauty.jpg'
import renee from './images/12-reneezellweger.jpg'
import beyonce from './images/13-beyonce-punk.jpg'
import blake from './images/14-blakelively.jpeg'
import zendaya from './images/15-zendaya.jpg'

import {MetGalaRSS} from './rss/RSSReader';

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

const content = {
	"Chynna Evans": {
		"description": "The TL;DR",
		"images": homeImages,
		"content": home,
	},
	"Met Gala 2020": {
		"description": "In loving memory",
		"images": metImages,
	}
}

export {content}