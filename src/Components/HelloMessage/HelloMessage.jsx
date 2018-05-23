import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HelloMessage extends Component {


	get greeting(){
		let time = (new Date()).getHours();

		const greetings = {
			"Goodmorning": 		t => t >= 5		&& t < 12,
			"Good afternoon": 	t => t >= 12 	&& t < 16,
			"Goodevening": 		t => t >= 16 	&& t <= 23,
			"Goodnight": 		t => t >= 0 	&& t < 5
		};

		let greeting = null;

		for(let [key, value] of Object.entries(greetings)){
			if(value(time)){
				greeting = key;
				break;
			}
		}

		return greeting;
	}




	render() {


		return (
			<div className="HelloMessage">
				{this.greeting} {this.props.name}
			</div>
		);
	}
}

HelloMessage.propTypes = {
	name: PropTypes.string
};

export default HelloMessage;