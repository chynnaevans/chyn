import React from 'react';
import './ChynDefault.css';

import TextLoop from 'react-text-loop';
import { slide as Menu } from 'react-burger-menu';

const names = ['chynna', 'chyn', 'chy'];

class RotatingText extends React.Component {
	render() {
		const nameObj = this.props.names.map((nickname, pos) => {
			if(pos === 0){
				return(<h1><div>{nickname}</div></h1>)
			} else {
				return (<h2><div>{nickname}</div></h2>)
			}
		});
		return (<TextLoop mask="true">{nameObj}</TextLoop>)
	}
}

class HamburgerMenu extends React.Component {
	render() {
		return (
			<Menu>
	            <a href="/" class={window.location.pathname === "/" ? "active" : ""}>Home</a>
	            <a href="/metgala" class={window.location.pathname === "/metgala" ? "active" : ""}>Met Gala</a>
	            <a href="/rants" class={window.location.pathname === "/rants" ? "active" : "" }>Rants</a>
	            <a href="mailto:chynna06@gmail.com?subject=yeet">Contact</a>
			</Menu>
		)
	}
}

function HeaderLinks() {
		return (
			<React.Fragment>
				<a href="/" class={window.location.pathname === "/" ? "active" : ""}>Home</a>
                <a href="/metgala" class={window.location.pathname === "/metgala" ? "active" : ""}>Met Gala</a>
                <a href="/rants" class={window.location.pathname === "/rants" ? "active" : "" }>Rants</a>
                <a href="mailto:chynna06@gmail.com?subject=yeet">Contact</a>
            </React.Fragment>
			)
}

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isMobile: this.props.isMobile ? this.props.isMobile !== null : false,
		};
	}

	render() {
		if (this.state.isMobile) {
			return (
				<div id="headerMobile">				
					<HamburgerMenu />
					<div id="nicknames"> <RotatingText names={names} /> </div>
					
				</div>
				)
		} else {
		return (
			<div id="headerWeb">				
				<div id="nicknames"> <RotatingText names={names} /> </div>
				<HeaderLinks />
			</div>
			)
	}
	}
}
export { Header };