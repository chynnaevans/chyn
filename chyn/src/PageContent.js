import React from 'react';
import ReactMarkdown from 'react-markdown';
import './ChynDefault.css';

class Content extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			contentSource: this.props.contentSource || null,
			content: this.props.content || null,
		}
	}
	render() {
		return(
			<div id="fullCard">
				<ReactMarkdown source = {this.state.content} />
			</div>
			)

	}

	componentDidMount() {
		if(this.state.contentSource !== null) {
		const readPath = this.state.contentSource;
		fetch(readPath)
			.then(response => {
				return response.text()
			})
			.then(text => {
				this.setState({
					content: text
				})
			})
	}
	}
}

export { Content };