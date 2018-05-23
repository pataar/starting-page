import React, { Component } from 'react';
import PropTypes from 'prop-types';
import defaultFavorites from '../../favorites';
import './Favbar.css';
import FavItem from './FavItem';

class Favbar extends Component {

	constructor(props) {
		super(props);
	}


	render() {

		let groups = Object.keys(defaultFavorites);

		return (
			<div className="Favbar">
				{groups.map((group, index) => (
					<div key={index} className="group">
						<div className="items">
							{defaultFavorites[group].map((item, index) => <FavItem key={index} item={item} />)}
						</div>
						<div className="label">
							{group}
						</div>
					</div>))}
			</div>
		);
	}
}

Favbar.propTypes = {

};

export default Favbar;