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
            <a href="/metgala" class={window.location.pathname === "/" ? "active" : ""}>Met Gala</a>
            <a href="/rants" class={window.location.pathname === "/rants" ? "active" : "" }>Rants</a>
            </div>
        )
    }
}

class Carousel extends React.Component {
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
               <Carousel />
               <RSSWidget url="https://amateurish.tumblr.com/tagged/metgalaoutfits/rss" title="All Time Best Dressed" />
           </div>
        )
    }
}

class Ramblings extends React.Component {
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

function RenderContent(props){
    const url = props.url
    if(url == "/metgala"){
        return <BestDressed />
    } else if(url == "/rants"){
        return <Ramblings />
    }
    else{
        return <Ramblings />
    }
}

// export default Header;
export {Header, RenderContent};
