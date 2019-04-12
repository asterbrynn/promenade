import React, {Component} from 'react';

export default class Card extends Component {
	render() {
		let {card} = this.props;
		console.log(card)
		return (
			<div style={{border: "1px solid black", margin: 20}}>
				<p>name: {card.name}</p>
			</div>
		)
	}
}