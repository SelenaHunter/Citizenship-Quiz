import React from "react"

function Question(props) {
    return (
        <div className="question">
            <div>Category {props.category}</div>
			<div>{props.id}. {props.question}</div>
        </div>
    )
}

export default Question