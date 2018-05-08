import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
	constructor(props){
		super(props);
		this.state = {
			show: 'no-mobile-menu'
		};
		this.toggleDropdown = this.toggleDropdown.bind(this);
	}

	// toggle mobile menu on ham click
	toggleDropdown() {
		if (this.state.show === 'no-mobile-menu') {
			this.setState({show: 'show-mobile-menu'});
		}
		else {
			this.setState({show: 'no-mobile-menu'});
		}
	}

	render() {
		return (
			<div>
				<div className="navbar">
					<div className="general-logo">
						<img src='img/logo-hack.png' alt=""/>
						<img className="hack-wordmark" src='img/hack-wordmark-darkcolor.png' alt=""/>
					</div>

					<div className="inner-menu desktop-only">
						<div className="tab-container">
							<span className="tab-style">Home</span>
							<span className="tab-style">Events</span>
							<span className="tab-style">Showcase</span>
							<span className="tab-style">Team</span>
						</div>
						<div className="tab-style login-box">Login</div>
					</div>

					<div className="ham-menu mobile-only" onClick={this.toggleDropdown}>
						<div className="ham-bar"></div>
						<div className="ham-bar"></div>
						<div className="ham-bar"></div>
					</div>
				</div>

				<div className={this.state.show}>
					<div className="mobile-menu-container">
						<div className="mobile-tab-style">Home</div>
						<div className="mobile-tab-style">Events</div>
						<div className="mobile-tab-style">Showcase</div>
						<div className="mobile-tab-style">Team</div>
					
						<div className="mobile-tab-style mobile-login-box">Login</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Nav;