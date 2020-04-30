import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import QuestionContainer from './QuestionContainer';

class App extends Component {
	state = {
		selectedState: "IA",
	}
	
	render() {
		return (
			<div className="main-container">
				<QuestionContainer />
			</div>
		)
	}
}

// const check20 = (function() {
// 	return ("x")
// 	// if (window.state.selectedState === "IA") {
// 	// 	return ("https://en.wikipedia.org/wiki/List_of_current_members_of_the_Iowa_Senate")
// 	// }
// })();

ReactDOM.render(<App />, document.getElementById('root'));