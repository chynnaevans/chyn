import React from 'react';
import './App.css';
import TextLoop from "react-text-loop";

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

class Container extends React.Component {
  render(){return (
        <div id="container"></div>
  );
}}

// export default Header;
export {Container, Header};
