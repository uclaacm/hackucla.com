import React, { Component } from 'react';
import splashBackground from '../../homepage_images/wrenches.png';
import styles from './homepage.css';

class Homepage extends Component {
	render() {
		return (
			<div className={styles.page1}>
				<img className={styles.img} src={splashBackground} />
				<div className={styles.page1_textBox}>
					<div className={styles.text + ' ' + styles.page1_tagline}>Move Fast<span className={styles.red}>.</span></div>
					<div className={styles.text + ' ' + styles.page1_tagline}>Build Things<span className={styles.red}>.</span></div>
					<div className={styles.text + ' ' + styles.page1_subtagline}>Start Hacking.</div>
				</div>
			</div>
		);
	}
}

export default Homepage;