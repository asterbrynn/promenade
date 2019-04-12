import React, {Component} from 'react';

export default class CreateCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			pronouns: "",
			birthday: ""
		}
	}
	handleChange = e => {
		let {value, name} = e.target;
		this.setState({
			[name]: value
		})
	}
	handleClick = () => {
		let newProfile = this.state;
		this.props.createCard(newProfile);
	}
	render() {
		return(
			<div>
				<p>
					<label htmlFor="name">Name:</label>
					<input type="text"
						name="name" id="name"
						value={this.state.name}
						placeholder="e.g. Ari"
						onChange={this.handleChange}/>
				</p>
				<p>
					<label htmlFor="pronouns">Pronouns:</label>
					<input type="text"
						name="pronouns" id="pronouns"
						value={this.state.pronouns}
						placeholder="e.g. they/them"
						onChange={this.handleChange}/>
				</p>
				<p>
					<label htmlFor="birthday">Birthday:</label>
					<input type="text"
						name="birthday" id="birthday"
						value={this.state.birthday}
						placeholder="e.g. 2 August"
						onChange={this.handleChange}/>
				</p>
				{/* <p>
					<label for="msg">Message:</label>
					<textarea id="msg" name="user_message"></textarea>
				</p> */}
				<button onClick={this.handleClick}>Add Profile!</button>
			</div>
		)
	}
}