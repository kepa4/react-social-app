import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import '../../index.css';

export class Header extends React.Component {
	render() {
		return (
		<div>
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<a href=''>Home</a>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav>
					<NavItem eventKey={1} href="">Profile</NavItem>
				</Nav>
			</Navbar>
		</div>
		)	
	}
}
