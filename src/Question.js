import React from "react"

function Question(props) {
	return (
        <div className="card question" key={props.id}>
            <p className="bold">
				{props.category}
			</p>
			<p>
				{props.number}. {props.question}
			</p>
			<br />
			<button aria-label="Get Answer" onClick={props.onClick}>Get Answer</button>
        </div>
	)
}

export default Question