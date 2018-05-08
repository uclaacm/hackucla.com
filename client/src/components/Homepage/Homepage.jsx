import React, { Component } from 'react';
import splashBackground from '../../homepage_images/wrenches.png';
import page2Background from '../../homepage_images/page2bg.png';
import blackLogo from '../../homepage_images/logo-hack-black.png';
import styles from './homepage.css';

class Homepage extends Component {
	render() {
		return (
			<div>
				<div className={styles.page1}>
					<img className={styles.img} src={splashBackground} />
					<div className={styles.page1_textBox}>
						<div className={styles.text + ' ' + styles.page1_tagline}>Move Fast<span className={styles.red}>.</span></div>
						<div className={styles.text + ' ' + styles.page1_tagline}>Build Things<span className={styles.red}>.</span></div>
						<div className={styles.text + ' ' + styles.page1_subtagline}>Start Hacking.</div>
					</div>
				</div>
				<div className={styles.page2}>
					<img className={styles.img} src={page2Background} />
					<img className={styles.logo} src={blackLogo} />
					<div className={styles.page2_textBox}>
						<div className={styles.text + ' ' + styles.page2_title}>What is Hack?</div>
						
					</div>
				</div>
			</div>
		);
	}
}

export default Homepage;