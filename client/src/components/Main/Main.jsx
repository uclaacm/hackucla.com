import React, { Component } from 'react';
import { Nav, MyComponent, Homepage } from '../';
import { Route, Switch } from 'react-router-dom';

class Main extends Component {
	render() {
		return (
			<div>
				<Nav />

				{/*Alternate pages beneath navbar, based on current route*/}
				<Switch>
					<Route exact path='/' render={() => <Homepage />} />
					<Route path='/test' render={() => <MyComponent {...this.props} />} />
				</Switch>
			</div>
		);
	}
}

export default Main;
