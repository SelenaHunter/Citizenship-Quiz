import React from "react"

function GameOver(props) {
	return(
		<div>
			<div>You've gone through 10 questions. You must get 6/10 correct to pass.</div>
			<button onClick={props.onClick}>Keep studying?</button>
		</div>
	)
}

export default GameOver