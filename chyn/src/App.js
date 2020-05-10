import React from 'react';
import './App.css';
import TextLoop from "react-text-loop";

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

class Container extends React.Component {
  render(){return (
        <div id="container">
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

            <div id="mainText">
                <div id="fullCard">
                    <h1>Top 8 Outfits</h1>
                </div>

                <div id="mainCard">
                    <h2>8. Stella Maxwell | Camp: Notes on Fashion</h2>
                    <h3>Moschino by Jeremy Scott </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer malesuada nunc. Sollicitudin tempor id eu nisl nunc. Non odio euismod lacinia at quis. Dui nunc mattis enim ut. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Id ornare arcu odio ut sem nulla. Aliquam faucibus purus in massa tempor nec feugiat nisl pretium. Amet porttitor eget dolor morbi non. Lacus luctus accumsan tortor posuere ac ut. Odio eu feugiat pretium nibh ipsum. Vivamus at augue eget arcu dictum varius duis at. Quisque sagittis purus sit amet volutpat. Nam aliquam sem et tortor consequat id. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. At urna condimentum mattis pellentesque id nibh tortor id. Fermentum et sollicitudin ac orci phasellus. Nisi scelerisque eu ultrices vitae auctor eu. Nulla malesuada pellentesque elit eget gravida.
                    </p>
                </div>
                <div id="mainCard">
                    <img src={dress8} alt={"8th dress"} />
                </div>

                <div id="mainCard">
                    <h2>7. Yolanda Hadid | Art of the In-between </h2>
                    <h3>Tommy Hilfiger</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer malesuada nunc. Sollicitudin tempor id eu nisl nunc. Non odio euismod lacinia at quis. Dui nunc mattis enim ut. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Id ornare arcu odio ut sem nulla. Aliquam faucibus purus in massa tempor nec feugiat nisl pretium. Amet porttitor eget dolor morbi non. Lacus luctus accumsan tortor posuere ac ut. Odio eu feugiat pretium nibh ipsum. Vivamus at augue eget arcu dictum varius duis at. Quisque sagittis purus sit amet volutpat. Nam aliquam sem et tortor consequat id. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. At urna condimentum mattis pellentesque id nibh tortor id. Fermentum et sollicitudin ac orci phasellus. Nisi scelerisque eu ultrices vitae auctor eu. Nulla malesuada pellentesque elit eget gravida.
                    </p>
                </div>
                <div id="mainCard">
                    <img src={dress7} alt={"7th dress"}/>
                </div>

                <div id="mainCard">
                    <h2>6. Naomi Campbell | Fashion in the Age of Technology </h2>
                    <h3>Roberto Cavalli Couture</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer malesuada nunc. Sollicitudin tempor id eu nisl nunc. Non odio euismod lacinia at quis. Dui nunc mattis enim ut. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Id ornare arcu odio ut sem nulla. Aliquam faucibus purus in massa tempor nec feugiat nisl pretium. Amet porttitor eget dolor morbi non. Lacus luctus accumsan tortor posuere ac ut. Odio eu feugiat pretium nibh ipsum. Vivamus at augue eget arcu dictum varius duis at. Quisque sagittis purus sit amet volutpat. Nam aliquam sem et tortor consequat id. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. At urna condimentum mattis pellentesque id nibh tortor id. Fermentum et sollicitudin ac orci phasellus. Nisi scelerisque eu ultrices vitae auctor eu. Nulla malesuada pellentesque elit eget gravida.
                </p>
            </div>
                <div id="mainCard">
                    <img src={dress6} alt={"6th dress"}/>
                </div>

                <div id="mainCard">
                    <h2>5. Karolina Kurkova | Impossible Conversations </h2>
                    <h3>Rachel Zoe</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer malesuada nunc. Sollicitudin tempor id eu nisl nunc. Non odio euismod lacinia at quis. Dui nunc mattis enim ut. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Id ornare arcu odio ut sem nulla. Aliquam faucibus purus in massa tempor nec feugiat nisl pretium. Amet porttitor eget dolor morbi non. Lacus luctus accumsan tortor posuere ac ut. Odio eu feugiat pretium nibh ipsum. Vivamus at augue eget arcu dictum varius duis at. Quisque sagittis purus sit amet volutpat. Nam aliquam sem et tortor consequat id. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. At urna condimentum mattis pellentesque id nibh tortor id. Fermentum et sollicitudin ac orci phasellus. Nisi scelerisque eu ultrices vitae auctor eu. Nulla malesuada pellentesque elit eget gravida.
                    </p>
                </div>
                <div id="mainCard">
                    <img src={dress5} alt={"5th dress"}/>
                </div>

                <div id="mainCard">
                    <h2>4. Cara Delevingne | Punk: Chaos to Couture </h2>
                    <h3>Burberry</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer malesuada nunc. Sollicitudin tempor id eu nisl nunc. Non odio euismod lacinia at quis. Dui nunc mattis enim ut. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Id ornare arcu odio ut sem nulla. Aliquam faucibus purus in massa tempor nec feugiat nisl pretium. Amet porttitor eget dolor morbi non. Lacus luctus accumsan tortor posuere ac ut. Odio eu feugiat pretium nibh ipsum. Vivamus at augue eget arcu dictum varius duis at. Quisque sagittis purus sit amet volutpat. Nam aliquam sem et tortor consequat id. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. At urna condimentum mattis pellentesque id nibh tortor id. Fermentum et sollicitudin ac orci phasellus. Nisi scelerisque eu ultrices vitae auctor eu. Nulla malesuada pellentesque elit eget gravida.
                    </p>
                </div>
                <div id="mainCard">
                    <img src={dress4} alt={"4th dress"}/>
                </div>

                <div id="mainCard">
                    <h2>3. Jennifer Lopez | China: Through the Looking Glass </h2>
                    <h3>Versace</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer malesuada nunc. Sollicitudin tempor id eu nisl nunc. Non odio euismod lacinia at quis. Dui nunc mattis enim ut. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Id ornare arcu odio ut sem nulla. Aliquam faucibus purus in massa tempor nec feugiat nisl pretium. Amet porttitor eget dolor morbi non. Lacus luctus accumsan tortor posuere ac ut. Odio eu feugiat pretium nibh ipsum. Vivamus at augue eget arcu dictum varius duis at. Quisque sagittis purus sit amet volutpat. Nam aliquam sem et tortor consequat id. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. At urna condimentum mattis pellentesque id nibh tortor id. Fermentum et sollicitudin ac orci phasellus. Nisi scelerisque eu ultrices vitae auctor eu. Nulla malesuada pellentesque elit eget gravida.
                    </p>
                </div>
                <div id="mainCard">
                    <img src={dress3} alt={"3rd dress"}/>
                </div>

                <div id="mainCard">
                    <h2>2. Alexander McQueen | AngloMania: Tradition and Transgression in British Fashion </h2>
                    <h3>Alexander McQueen</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer malesuada nunc. Sollicitudin tempor id eu nisl nunc. Non odio euismod lacinia at quis. Dui nunc mattis enim ut. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Id ornare arcu odio ut sem nulla. Aliquam faucibus purus in massa tempor nec feugiat nisl pretium. Amet porttitor eget dolor morbi non. Lacus luctus accumsan tortor posuere ac ut. Odio eu feugiat pretium nibh ipsum. Vivamus at augue eget arcu dictum varius duis at. Quisque sagittis purus sit amet volutpat. Nam aliquam sem et tortor consequat id. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. At urna condimentum mattis pellentesque id nibh tortor id. Fermentum et sollicitudin ac orci phasellus. Nisi scelerisque eu ultrices vitae auctor eu. Nulla malesuada pellentesque elit eget gravida.
                    </p>
                </div>
                <div id="mainCard">
                    <img src={dress1} alt={"2nd dress"}/>
                </div>

                <div id="mainCard">
                    <h2>1. Naomi Campbell | Haute Couture </h2>
                    <h3>Versace</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer malesuada nunc. Sollicitudin tempor id eu nisl nunc. Non odio euismod lacinia at quis. Dui nunc mattis enim ut. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Id ornare arcu odio ut sem nulla. Aliquam faucibus purus in massa tempor nec feugiat nisl pretium. Amet porttitor eget dolor morbi non. Lacus luctus accumsan tortor posuere ac ut. Odio eu feugiat pretium nibh ipsum. Vivamus at augue eget arcu dictum varius duis at. Quisque sagittis purus sit amet volutpat. Nam aliquam sem et tortor consequat id. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. At urna condimentum mattis pellentesque id nibh tortor id. Fermentum et sollicitudin ac orci phasellus. Nisi scelerisque eu ultrices vitae auctor eu. Nulla malesuada pellentesque elit eget gravida.
                    </p>
                </div>
                <div id="mainCard">
                    <img src={dress2} alt={"1st dress"}/>
                </div>

            </div>
        </div>
  );
}}

// export default Header;
export {Container, Header, Carousel};
