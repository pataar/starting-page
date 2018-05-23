import React, { Component } from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import './Clock.css';

class Clock extends Component {

	constructor(props) {
		super(props);

		this.timeFormat = props.timeFormat ||  'HH:mm';
		this.dateFormat = props.dateFormat ||  'DD-MM-YYYY';

		this.state = {
			time: (this.timeString),
			date: (this.dateString)
		};

		setInterval(() => this.updateTime(), 5000);

		this.updateTime = this.updateTime.bind(this);
	}

	updateTime() {
		this.setState({
			time: this.timeString,
			date: this.dateString
		});
	}

	get dateString() {
		return format(new Date(), this.dateFormat);
	}

	get timeString() {
		return format(new Date(), this.timeFormat);
	}

	render() {
		return (
			<div className="Clock">
					{ this.state.time } <span className="separator">|</span> {this.state.date}
			</div>
		);
	}
}

export default Clock;

Clock.propTypes = {
	dateFormat: PropTypes.string,
	timeFormat: PropTypes.string
};