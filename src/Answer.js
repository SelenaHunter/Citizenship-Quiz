import React from "react"

function Answer(props) {
	return (
		<div className="card answer"> 
			<div>
				<p className="bold">Answer:</p>
				<pre>{props.answer}</pre>
			</div>
			<br />
			<button aria-label="Next Question" onClick={props.onClick}>Next Question</button>
		</div>
	)
}

export default Answer