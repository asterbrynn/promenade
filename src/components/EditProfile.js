import React, {Component} from 'react';

export default class EditProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: this.props.card.name,
			pronouns: this.props.card.pronouns,
			birthday: this.props.card.birthday
		}
	}
	handleChange = e => {
		let {value, name} = e.target;
		this.setState({
			[name]: value
		})
	}
	handleClick = () => {
		let updated = {...this.props.card, ...this.state};
		this.props.updateProfile(updated);
		this.props.toggleEdit();
	}
	render() {
		return(
			<div>
				<p>
					<label htmlFor="name">Name:</label>
					<input type="text"
						name="name" id="name"
						value={this.state.name}
						onChange={this.handleChange}/>
				</p>
				<p>
					<label htmlFor="pronouns">Pronouns:</label>
					<input type="text"
						name="pronouns" id="pronouns"
						value={this.state.pronouns}
						onChange={this.handleChange}/>
				</p>
				<p>
					<label htmlFor="birthday">Birthday:</label>
					<input type="text"
						name="birthday" id="birthday"
						value={this.state.birthday}
						onChange={this.handleChange}/>
				</p>
				<button onClick={this.handleClick}>Update Profile</button>
			</div>
		)
	}
}