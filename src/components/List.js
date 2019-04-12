import React, {Component} from 'react';
import axios from 'axios';
import Card from './Card';

export default class List extends Component {
	constructor() {
		super();
		this.state = {
			cards: []
		}
	}
	componentDidMount() {
		axios.get('/api/profiles').then(res => {
			this.setState({
				cards: res.data
			})
		}).catch(err => console.log("get problem lol", err))
	}
	createCard = newProfile => {
		axios.post('/api/profiles').then(res => {
			this.setState({
				cards: res.data
			})
		}).catch(err => console.log("post problem lol", err))
	}
	render() {
		return (
			<div>
				{this.state.cards.map(card => {
					return <Card key={card.id} card={card}/>
				})}
			</div>
		)
	}
}