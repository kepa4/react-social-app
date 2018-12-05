import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './profile.css';
import axios from 'axios';

var baseUrl = 'http://localhost:8080/api';
export class Profile extends React.Component {
	constructor () {
		super();
		this.state = {
			user: ''
		}
	this.getUserInfo = this.getUserInfo.bind(this);
	}
	
	getUserInfo() {
		axios.get(baseUrl + '/users/jdoe')
			.then(response => this.setState({user: response.data}));
		console.log();
	}

	render() {
		return(	
		<Grid>
			<Row>
				<Col xs={15} ms={4}>
					<Image id="profileWallpaper" src="http://picsum.photos/1280/300/?random" rounded/>
				</Col>
				<Col xs={2} ms={2}>
					<Image id="profilePicture" src="https://loremflickr.com/320/240/dog" circle />
				</Col>
			</Row>
			<div className='button__container'>
      			<button className='button' onClick={this.getUserInfo}>
        			Click Me
      			</button> 
				<p>{this.state.user.firstName}</p>
    		</div>	
		</Grid>	
		)
	}
} 
