import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './containers/Header/header.js';
import { Profile } from './containers/Profile/profile.js';

class App extends React.Component {
	render() {
		return (
			<div>
				<Header/>		
				<Profile/>
			</div>
		)
	}
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
