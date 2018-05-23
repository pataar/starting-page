import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Viewport.css';
import Theme from '../Theme/theme';

class Viewport extends Component {


	render() {

		const style = {
			backgroundImage: `url(${Theme.wallpaper})`,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			textAlign: 'center'
		};

		return (
			<div className="Viewport" style={style}>
				{this.props.children}
			</div>
		);
	}
}

Viewport.propTypes = {

};

export default Viewport;