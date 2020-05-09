import React, {useEffect, useRef} from 'react';
import './App.css';
import FlipPage from 'react-flip-page';

const nicknames = ['chynna', 'chyn', 'chy', 'chunna']

function pickNickname(nicknames){

  var rand = Math.random();
  var i = Math.floor(rand * Math.floor(nicknames.length));

  return nicknames[i]
}

class Header_old extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      nicknames: nicknames,
      currentIndex: 0,
    };
    this.flippage = useRef(null);
  }

  updateNickname() {
    if(this.state.currentIndex === this.state.nicknames.length - 1) {
      this.setState({
        currentIndex: 0
      });
    } else {
      this.setState({
        currentIndex: this.state.currentIndex + 1
      });
    }
  }

  goNext() {
    this.flippage.gotoNextPage();
  }

  render() {
    return(
        <FlipPage loopForever="true" ref={(component) => {this.flippage = component;}}>
        <article><div id="header"><h1>chyn</h1></div></article>
          <article><div id="header"><h1>chunna</h1></div></article>
        </FlipPage>
    )

  }
  componentDidMount() {
    this.interval = setInterval(() => {this.flippage.gotoNextPage();},3000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

function App() {
  return (
  <Header_old />
  );
}

export default App;
