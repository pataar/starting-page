import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class SearchBar extends Component {

	constructor(props) {
		super(props);

		this.autoFocus = props.autoFocus;

		this.state = {
			focused: false
		}
	}


	render() {

		const className = "SearchBar" + (this.state.focused ? ' focused' : '');

		return (
			<div className={className}>
				<FontAwesomeIcon style={{ height: '2rem' }} icon={["fas", "search"]} />
				<input
					autoFocus={this.autoFocus}
					type="text"
					onBlur={() => this.setState({ focused: false })}
					onFocus={() => this.setState({ focused: true })}
					placeholder="" />
			</div>
		);
	}
}

SearchBar.propTypes = {
	autoFocus: PropTypes.bool
};

SearchBar.defaultProps = {
	autoFocus: true
};

export default SearchBar;