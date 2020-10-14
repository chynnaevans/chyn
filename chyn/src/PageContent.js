import React from 'react';
import ReactMarkdown from 'react-markdown';
import './ChynDefault.css';

class Content extends React.Component {
	render() {
		return(
			<div id="fullCard">
				<ReactMarkdown source = {this.props.content} />
			</div>
			)

	}
	}

export { Content };