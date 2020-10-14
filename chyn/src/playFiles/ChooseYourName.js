import React from 'react';
import './App.css';

const names = {
	"corny": ["T.G.I. 11:45", ],
	"themes": ["The More You Know", "Marketplace Trivia"],
	"professional": ["Remote Bonding", "Meet & Greet", "Ice Breakers"],
	"lame": ["Super Fun Team Hangout", "Marketplace Pals"]
}

const questions = {
	"Do you want fun, but kinda lame, name?": "corny",
	"Will you be continuing with the themes?": "themes",
	"Would you vibe with a less fun, more professional name?": "professional",
	"What about a name so lame that it might work?": "lame"
}

var allNames = []

for(var key in names){
	allNames.push(...names[key])
	console.log(allNames)
}

class NameQuiz extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			names: [],	
			question: 0,
			nameSwap: allNames,
			swapped: false,
		}
	}

	clickButton(value, question){
			if (value === true){
				this.setState({'names': this.state.names.concat(names[questions[Object.keys(questions)[this.state.question]]])})
			}
			this.setState({'question':this.state.question + 1})
		}

	questions(){
		return(
			<div id="fullCard">
			<h3>{Object.keys(questions)[this.state.question]}</h3>
				<button onClick={() => this.clickButton(true, Object.keys(questions)[this.state.question])}> YES </button>
				<button onClick={() => this.clickButton(false, Object.keys(questions)[this.state.question])}> NO </button>
			</div>
			)
	}
	reload() {
		window.location.reload()
	}
	renderQuestion(){
		var names = this.state.names.map((name) => 
			<div>{name}</div>
		)

		if (this.state.question < Object.keys(questions).length){
			return(this.questions())
		} else if (this.state.question === Object.keys(questions).length){
			return(<div>
				<h1>Thanks for playing! Here are your names:</h1>
				{names}
				<br/>
				<button onClick={()=>{this.reload()}}>Try again!</button><br/>
				<button onClick={()=>{this.setState({'names':this.state.nameSwap, 'nameSwap':this.state.names, 'swapped': !this.state.swapped})}}>{this.state.swapped ? "View custom names": "View all names"}</button>
				</div>)
		}
	}

	render(){

		return(
			<div id="container">
			<div id="pageBio">
			<h1><span>Rename the containment chat</span></h1><br/>
			<p>Complete this quiz to get a customised list of name recommendations. 
			<br/>I would also like to suggest "We miss Chynna", "In loving memory of Chynna", and "I wish Chynna was here" to the list.</p>
			
			</div>
			<div id="quiz">
				{this.renderQuestion()}
				{console.log(this.state.question < Object.keys(questions).length)}
			</div>
			</div>
			)
	}
}

export { NameQuiz };