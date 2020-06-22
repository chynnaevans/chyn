import React from 'react';
import './App.css';
import TextLoop from "react-text-loop";
import {RSSWidget, GenericRSS} from "./rss/RSSReader";

// Carousel images
import sjp from './11-sjp-savagebeauty.jpg'
import renee from './12-reneezellweger.jpg'
import beyonce from './13-beyonce-punk.jpg'
import blake from './14-blakelively.jpeg'
import zendaya from './15-zendaya.jpg'

import abby from './abbyscuito.jpg'
import margaret from './margaret_hamilton.jpg'
import matt from './mattgroening.jpg'
import amcqueen from './mcqueen.jpg'
import ss99 from './mcqueenss99.jpg'

const nicknames = ['chynna', 'chyn', 'chy', 'chunna'];

class Title extends React.Component {
    render() {
        const nameObj = nicknames.map((nickname, pos) => {
            if(nickname === "chynna"){
                return (<h1><div>{nickname}</div></h1>)
            } else {
                return (
                    <h2>
                        <div>{nickname}</div>
                    </h2>
                )
            }
        });
        return(
            <TextLoop mask="true">
                {nameObj}
            </TextLoop>
        )
    }
}

class Header extends React.Component {
    render(){
        return(
            <div id="header">
            <div id="nicknames"><Title /></div>
            <a href="/" class={window.location.pathname === "/" ? "active" : ""}>Home</a>
            <a href="/metgala" class={window.location.pathname === "/metgala" ? "active" : ""}>Met Gala</a>
            <a href="/rants" class={window.location.pathname === "/rants" ? "active" : "" }>Rants</a>
            <a href="mailto:chynna06@gmail.com?subject=yeet">Contact</a>
            </div>
        )
    }
}

class MetCarousel extends React.Component {
    render(){
        return(
            <div id="carousel">
                <div id="infoBox">
                    <h1>Met Gala 2020</h1>
                    <p>In loving memory</p>
                </div>
                <img src={sjp} alt="SJP" />
                <img src={renee} alt="Renee Zellweger" />
                <img src={beyonce} alt="Beyonce" />
                <img src={blake} alt="Blake Lively" />
                <img src={zendaya} alt="Zendaya" />
            </div>
        )
    }
}

class BestDressed extends React.Component {
    render(){
        return(
           <div id="container">
               <MetCarousel />
               <RSSWidget url="https://amateurish.tumblr.com/tagged/metgalaoutfits/rss" title="All Time Best Dressed" />
           </div>
        )
    }
}

class Rants extends React.Component {
    render(){
        return(
            <div id="container">
            <div id="pageBio">
                    <h1><span>Random Deep Dives & Rants</span></h1>
                    <br/>This is just a page, connected to a blog, where I can rant and get excited.
                    <br/>Recent deep dives have been: diversity in the music industry, algorithm classification, and links between mental health and technology.
                    <br/>I'm only still typing to fill white space so that this page looks prettier.
                    <hr/>
            </div>
                <GenericRSS url="https://amateurish.tumblr.com/tagged/ramble/rss?6" title="A few rabit holes later..." />
            </div>
            )
    }
}
class HomeCarousel extends React.Component {
    render(){
        return(
            <div id="carousel">
                <div id="infoBox">
                    <h1>Chynna Evans</h1>
                    <p>The TL;DR</p>
                </div>
                <img src={ss99} alt="McQueen SS99" />
                <img src={abby} alt="Abby Sciutto, NCIS" />
                <img src={margaret} alt="Magaret Hamilton" />
                <img src={amcqueen} alt="Alexander McQueen" />
                <img src={matt} alt="Matt Groening" />
            </div>
        )
    }
}

class Home extends React.Component {
    render(){
        return(
            <div id="container">
                <HomeCarousel />
                <div id="fullCard">
                    <div id="homeText">
                        <br/>
                        <p>
                            <small>(pls don't try and view this site on mobile)</small>
                            <br/>
                            Hi! I'm Chynna; an Australian software engineer based in NYC. 
                            I love the backend side of data-heavy applications & learning about how different tech/architectures can solve (and create) weird problems.
                             Also the front end. Also the infra. Actually, I just love learning about eng.
                            <br/><br/>
                            The only things that rival my love of computer science are fashion & gymnastics (and The Simpsons).
                            Above are some of the people that have impacted my life and career in a huge way. I could speak about this forever. Hit me up if you want to chat!
                        </p>
                    </div>
                </div>
            </div>
            )
    }
}

function RenderContent(props){
    const url = props.url
    if(url === "/metgala"){
        return <BestDressed />
    } else if(url === "/rants"){
        return <Rants />
    }
    else{
        return <Home />
    }
}

// export default Header;
export {Header, RenderContent};
