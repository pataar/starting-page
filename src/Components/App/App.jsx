import React, { Component } from 'react';
import './App.css';
import Viewport from '../Viewport/Viewport';
import HelloMessage from '../HelloMessage/HelloMessage';
import Clock from '../Clock/Clock';
import Theme from '../Theme/theme';
import Favbar from '../Favbar/Favbar';

import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import brands from '@fortawesome/fontawesome-free-brands'

import 'roboto-fontface/css/roboto/roboto-fontface.css';
import SearchBar from '../Search/SearchBar';

fontawesome.library.add(brands, solid)

class App extends Component {
	render() {

		const centerStyle = {
			color: Theme.textColor,
			fontSize: '4rem',
			fontFamily: 'roboto'
		};


		return (
			<Viewport>
				<div className="Center" style={centerStyle}>
					<HelloMessage name="Pataar" />
					<Clock />
					<SearchBar />
				</div>

				<Favbar />
			</Viewport>
		);
	}
}

export default App;
