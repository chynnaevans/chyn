import React from 'react';
import './ChynDefault.css';

import TextLoop from 'react-text-loop';
import { slide as Menu } from 'react-burger-menu';

import linkedin from './images/linkedin.png';
import github from './images/github.png';

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
	            <button className={this.props.title === "Chynna Evans" ? "mobileActive" : "" }  onClick={() => this.props.homeClick()} >Home</button>
	            <button className={this.props.title === "Met Gala 2020" ? "mobileActive" : "" } onClick={() => this.props.metClick()} >Met Gala</button>
	            <button className={this.props.title === "Random Deep Dives & Rants" ? "mobileActive" : ""  } onClick={() => this.props.rantsClick()} >Rants</button>
	            <a href="mailto:chynna06@gmail.com?subject=yeet">Contact</a>
                <a href="http://github.com/chynnaevans"><img src={github} alt="Github logo"/></a>
                <a href="https://www.linkedin.com/in/chynnaevans/"><img src={linkedin} alt="LinkedIn logo"/></a>
			</Menu>
		)
	}
}

class HeaderLinks extends React.Component {
		render() {
			return (
			<React.Fragment>
				<button className={this.props.title === "Chynna Evans" ? "webActive" : "" } onClick={() => this.props.homeClick()} >Home</button>
                <button className={this.props.title === "Met Gala 2020" ? "webActive" : ""} onClick={() => this.props.metClick()} >Met Gala</button>
                <button className={this.props.title === "Random Deep Dives & Rants" ? "webActive" : "" } onClick={() => this.props.rantsClick()} >Rants</button>
                <a href="mailto:chynna06@gmail.com?subject=yeet">Contact</a>
                <a href="http://github.com/chynnaevans"><img src={github} alt="Github logo"/></a>
                <a href="https://www.linkedin.com/in/chynnaevans/"><img src={linkedin} alt="LinkedIn logo"/></a>
            </React.Fragment>
			)
	}
}

class Header extends React.Component {
	render() {
		if (this.props.isMobile === true) {
			return (
				<div id="headerMobile">				
					<HamburgerMenu 
						title={this.props.title}
						homeClick={() => this.props.homeClick()}
						metClick={() => this.props.metClick()}
						rantsClick={() => this.props.rantsClick()}/>
					<div id="nicknames"> <RotatingText names={names} /> </div>
					
				</div>
				)
		} else {
		return (
			<div id="headerWeb">				
				<div id="nicknames"> <RotatingText names={names} /> </div>
				<HeaderLinks 
					title={this.props.title}
					homeClick={() => this.props.homeClick()}
					metClick={() => this.props.metClick()}
					rantsClick={() => this.props.rantsClick()}
				/>
			</div>
			)
	}
	}
}
export { Header };