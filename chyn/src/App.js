import React from 'react';
import './App.css';
import TextLoop from "react-text-loop";
import RSSWidget from "./rss/RSSReader";

// Carousel images
import sjp from './11-sjp-savagebeauty.jpg'
import renee from './12-reneezellweger.jpg'
import beyonce from './13-beyonce-punk.jpg'
import blake from './14-blakelively.jpeg'
import zendaya from './15-zendaya.jpg'

import dress8 from './8dress-stellamaxwell-19.jpg'
import dress7 from './7dress-yolandahadid-17.jpg'
import dress6 from './6dress-naomicampbell-16.jpg'
import dress5 from './5dress-karolinakurkova-12.jpg'
import dress4 from './4dress-caradelevigne-13.jpg'
import dress3 from './3dress-jlo-15.jpg'
import dress2 from './2dress-naomicampbell-95.jpg'
import dress1 from './1dress-amcqueen-06.jpg'

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
            <Title />
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
               <RSSWidget url="http://amateurish.tumblr.com/rss/?5" title="Best Dressed" />
           </div>
        )
    }
}

// export default Header;
export {Header, BestDressed};
