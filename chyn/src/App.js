import React from 'react';
import './App.css';
import TextLoop from "react-text-loop";
import {MetGalaRSS, GenericRSS} from "./rss/RSSReader";
import {NameQuiz} from './ChooseYourName'
import {MyStory} from './MyStory'

// Carousel images
import sjp from './images/11-sjp-savagebeauty.jpg'
import renee from './images/12-reneezellweger.jpg'
import beyonce from './images/13-beyonce-punk.jpg'
import blake from './images/14-blakelively.jpeg'
import zendaya from './images/15-zendaya.jpg'

import abby from './images/abbyscuito.jpg'
import margaret from './images/margaret_hamilton.jpg'
import matt from './images/mattgroening.jpg'
import amcqueen from './images/mcqueen.jpg'
import ss99 from './images/mcqueenss99.jpg'

const nicknames = ['chynna', 'chyn', 'chy'];

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
               <MetGalaRSS url="https://amateurish.tumblr.com/tagged/metgalaoutfits/rss" title="All Time Best Dressed" />
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
                    <br/>Hi, I talk alot and since COVID, I haven't had the opportunity to do that so much.
                    <br/>Here are some spontaneous brain dumps and/or fun things that I've worked on.
                    <br/>I'm only still typing to fill white space so that this page looks prettier.
                    <hr/>
            </div>
                <GenericRSS url="https://amateurish.tumblr.com/tagged/ramble/rss" title="A few rabit holes later..." />
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
                            <small>(This website will not be pretty on mobile and I'm very aware of that. I've never done frontend before... I'm working on it)</small>
                            <br/>
                            Hello!! I'm Chynna – an Australian living in NYC. I've created this website because:
                            <ol type="a">
                                <li>I'm bored</li>
                                <li>I'm a software engineer & software engineers need their own website, right??</li>
                            </ol>
                            <br/>
                            The people/pictures above pretty well sum up the things I love and who I am. From left to right: Alexander McQueen SS'99 show, Abby Sciutto (NCIS), Margaret Hamilton, Alexander McQueen, Matt Groening.
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
    } else if(url === "/"){
        return <Home />
    } else if(url ==="/quiz"){
        return <NameQuiz />
    } else if(url === "/story"){
        return <MyStory />
    }
    else{
        return (<div id="mainText"><h1>Pls stop navigating to different pages...</h1></div>)
    }
}

// export default Header;
export {Header, RenderContent};
