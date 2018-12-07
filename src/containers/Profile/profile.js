import React from 'react';
import { Grid, Row, Col, Image, form, FormGroup, FormControl} from 'react-bootstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
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
	this.getUserInfo();
	}
	
	getUserInfo() {
		axios.get(baseUrl + '/users/jdoe')
			.then(response => this.setState({user: response.data}));
	}	
	

	render() { 
		const { user } = this.state;
		return(	
		<div>
			<div className="profileHeader">
				<Image id="profileWallpaper" src="https://picsum.photos/1200/300/?random"/>
				<Image id="profilePicture" src="https://loremflickr.com/320/320/cat" circle />
				<p id="name">{user.firstName} {user.lastName}</p>	
			</div>	
			<div>
				<Card id="about">
					<CardBody>
						<CardTitle>About Me</CardTitle>
						<CardSubtitle>Card subtitle</CardSubtitle>
          				<CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
					</CardBody>
				</Card>	
				<Card id="createPost">
					<CardBody>
						<CardTitle>Create a Post</CardTitle>	
						<form>
       						 <FormGroup controlId="formBasicText"> 
          						<FormControl type="text" placeholder="Enter text"/>
								</FormGroup>
						</form>
          				<Button>Create</Button>
					</CardBody>
				</Card>
			</div>					
		</div>
		)
	}
}
