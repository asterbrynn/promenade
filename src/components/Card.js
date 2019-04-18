import React, {Component} from 'react';
import EditProfile from './EditProfile';

export default class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
			edit: false
		}
	}
	toggleEdit = () => {
		this.setState({
			edit: !this.state.edit
		})
	}
	
	render() {
		let {card} = this.props;
		console.log(card)
		return (
			this.state.edit ?
			<EditProfile card={card}
				updateProfile={this.props.updateProfile}
				toggleEdit={this.toggleEdit}/>
			: <div style={{border: "1px solid black", margin: 20,
							flexDirection: "column",
							alignItems: "center", minWidth: "45vw"}}>
				<p>name: {card.name}</p>
				<button onClick={this.toggleEdit}
					style={{marginBottom: 7}}>Edit</button>
			</div>
		)
	}
}