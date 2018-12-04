import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './profile.css';

export class Profile extends React.Component {
	render() {
		return(
		<Grid>
			<Row>
				<Col xs={15} ms={4}>
					<Image id="profileWallpaper" src="http://picsum.photos/1280/300/?random" rounded/>
				</Col>
				<Col xs={2} ms={2}>
					<Image id="profilePicture" src="https://placekitten.com/160/160" circle />
				</Col>
			</Row>
		</Grid>			
		)
	}
} 
