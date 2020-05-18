import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FlashCards from "./FlashCards";
import Header from "./Header";
import Footer from "./Footer";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedState: "",
			selectedZip: "",
			isSixtyFiveTwenty: false,
			currentSenators: "",
			currentRepresentatives: "",
			currentPresident: "",
			error: "",
			showInfo: false,
		}
		this.handleClick = this.handleClick.bind(this)
		this.checkAnswers = this.checkAnswers.bind(this)
	}
	
	handleClick() {
		this.setState({ 
			selectedState: this.refs.select.value,
			selectedZip: this.refs.zip.value,
			isSixtyFiveTwenty: this.refs.sixtyFiveTwenty.value,
		}, () => {
			// After the state is done being set, call checkAnswers.
			this.checkAnswers()
		});
	}
	
	checkAnswers() {
		// ====================
		// State Representatives
		// ====================
		fetch(`https://cors-anywhere.herokuapp.com/http://whoismyrepresentative.com/getall_mems.php?zip=${this.state.selectedZip}&output=json`, {
			method: 'GET',
		})
			.then(response => response.json())
			.then(data => {
				let representativeResults = []
				data.results.forEach(element => {
					representativeResults.push(element.name)
				})
				this.setState({
					currentRepresentatives: representativeResults,
				})
			})
			.catch(error => {this.setState({error: error})})

		// ====================
		//   State Senators
		// ====================
		if (this.state.selectedState === "DC") {
			// Do not make the API call; there are no senators for DC and the API will return an error. The state object should nevertheless be in array form for the .join() call to properly function.
			this.setState({currentSenators: ["DC has no state senators."]})
		} else {
			fetch(`https://cors-anywhere.herokuapp.com/https://whoismyrepresentative.com/getall_sens_bystate.php?state=${this.state.selectedState}&output=json`, {
				method: 'GET',
			})
				.then(response => response.json())
				.then(data => {
					let senatorResults = []
					data.results.forEach(element => {
						senatorResults.push(element.name)
					})
					this.setState({
						currentSenators: senatorResults,
					})
				})
				.catch(error => {this.setState({error: error})})
			}
	}

	render() {
		let gameElement
		let errorExplanation
		let info = "This information is needed to answer some questions about your local government. This app does not collect or store any of your personal info."
		if (this.state.error) {
			// If something goes wrong during the data retrieval from the API, display the error visibly with instructions.
			if (this.state.error.toString().includes("SyntaxError")) {
				errorExplanation = "Have you entered your zip code correctly? Please refresh the page and try again."
			} else if (this.state.error.toString().includes("NetworkError")) {
				errorExplanation = "There may be some issues with the network. Please try again later."
			} else {
				errorExplanation = "Please wait a few moments, refresh the page and try again."
			}
			gameElement = 
				<div>
					<p className="error">{this.state.error.toString()}</p>
					<p>{errorExplanation} If this error persists, contact <a href="https://selenahunter.github.io">the developer</a>.</p>
				</div>
		} else if (!this.state.selectedState || !this.state.selectedZip) {
			// If the user has not chosen a zip/state, render the state/zip selection form and don't move on until we have this data from the user.
			gameElement = 
				<div className="form">
					<form>
						<div className="bold title">Information About You</div>
						<button 
							className="collectInfo" 
							aria-label="Why we ask for this info"
							onClick={(e) => {
								e.preventDefault()
								this.setState({ showInfo: !this.state.showInfo })
							}}>?</button>
						<br />
						<div className="info">{ this.state.showInfo ? info : null }</div>
						<label htmlFor="state">State:</label>
						<select id="state" ref="select">
							<option value="" defaultValue="">Select a State</option>
							<option value="AL">Alabama</option>
							<option value="AK">Alaska</option>
							<option value="AZ">Arizona</option>
							<option value="AR">Arkansas</option>
							<option value="CA">California</option>
							<option value="CO">Colorado</option>
							<option value="CT">Connecticut</option>
							<option value="DE">Delaware</option>
							<option value="DC">District Of Columbia</option>
							<option value="FL">Florida</option>
							<option value="GA">Georgia</option>
							<option value="HI">Hawaii</option>
							<option value="ID">Idaho</option>
							<option value="IL">Illinois</option>
							<option value="IN">Indiana</option>
							<option value="IA">Iowa</option>
							<option value="KS">Kansas</option>
							<option value="KY">Kentucky</option>
							<option value="LA">Louisiana</option>
							<option value="ME">Maine</option>
							<option value="MD">Maryland</option>
							<option value="MA">Massachusetts</option>
							<option value="MI">Michigan</option>
							<option value="MN">Minnesota</option>
							<option value="MS">Mississippi</option>
							<option value="MO">Missouri</option>
							<option value="MT">Montana</option>
							<option value="NE">Nebraska</option>
							<option value="NV">Nevada</option>
							<option value="NH">New Hampshire</option>
							<option value="NJ">New Jersey</option>
							<option value="NM">New Mexico</option>
							<option value="NY">New York</option>
							<option value="NC">North Carolina</option>
							<option value="ND">North Dakota</option>
							<option value="OH">Ohio</option>
							<option value="OK">Oklahoma</option>
							<option value="OR">Oregon</option>
							<option value="PA">Pennsylvania</option>
							<option value="RI">Rhode Island</option>
							<option value="SC">South Carolina</option>
							<option value="SD">South Dakota</option>
							<option value="TN">Tennessee</option>
							<option value="TX">Texas</option>
							<option value="UT">Utah</option>
							<option value="VT">Vermont</option>
							<option value="VA">Virginia</option>
							<option value="WA">Washington</option>
							<option value="WV">West Virginia</option>
							<option value="WI">Wisconsin</option>
							<option value="WY">Wyoming</option>
						</select>
						<br />
						<label htmlFor="zip">Zip Code:</label>
						<input type="text" id="zip" ref="zip" pattern="[0-9]{5}"></input>
						<br />
						<label htmlFor="sixtyFiveTwenty">I am 65+ years old and have been a legal permanent resident of the US for 20+ years (the 65/20 exemption):</label>
						<input type="checkbox" id="sixtyFiveTwenty" className="sixtyFiveTwenty" ref="sixtyFiveTwenty"></input>
					</form>
					<button type="submit" onClick={() => {
						if (/[0-9]{5}/.test(this.refs.zip.value)) {
							this.handleClick()
						}
						}}>Submit</button>
				</div>
		} else if (this.state.currentSenators && this.state.currentRepresentatives) {
			// If we have the data back from the Senator/Rep API, render the flashcards.
			gameElement = <FlashCards 
							isSixtyFiveTwenty={this.state.isSixtyFiveTwenty} 
							selectedState={this.state.selectedState} 
							currentSenators={this.state.currentSenators}
							currentRepresentatives={this.state.currentRepresentatives}
							/>
		} else {
			// While we wait for the data from the Senator/Rep API, render a loading screen.
			gameElement = <div>Loading...</div>
		}

		return (
			<div className="main">
				<Header />
				<div className="mainContent">{gameElement}</div>
				<Footer />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));