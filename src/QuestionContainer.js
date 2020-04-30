import React, { Component } from 'react';
import questionList from "./QuestionList";
import Question from "./Question";

class QuestionContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			...props,
		};
	}
	
    displayAnswer(question) {
		console.log(question)
		console.log(question.answer)
    }
	
	render() {
		const questionComponents = questionList.map(question => 
			<Question 
				key={question.id}
				id={question.id}
				category={question.category}
				question={question.question} 
				onClick={() => {
					console.log("question")
					this.displayAnswer(question)
					} 
				} 
			/>)

		return (
			<div>
				{questionComponents}
			</div>	
		)
	}
}
	

export default QuestionContainer