import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class FavItem extends Component {
	render() {
		return (
			<a href={this.props.item.url} alt={this.props.item.name}>
				<FontAwesomeIcon icon={this.props.item.icon} />
			</a>
		);
	}
}

FavItem.propTypes = {
	item: PropTypes.object.isRequired
};

export default FavItem;