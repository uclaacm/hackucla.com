import React, { Component } from 'react';
import splashBackground from '../../homepage_images/wrenches.png';
import styles from './homepage.css';

class Homepage extends Component {
	render() {
		return (
			<div className="page1">
				<img className={styles.img} src={splashBackground} />
				<div className={styles.tagline}>Move Fast.</div>
			</div>
		);
	}
}

export default Homepage;