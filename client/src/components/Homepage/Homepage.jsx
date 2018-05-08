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
						<div className={styles.text_poppins + ' ' + styles.page1_tagline}>Move Fast<span className={styles.red}>.</span></div>
						<div className={styles.text_poppins + ' ' + styles.page1_tagline}>Build Things<span className={styles.red}>.</span></div>
						<div className={styles.text_poppins + ' ' + styles.page1_subtagline}>Start Hacking.</div>
					</div>
				</div>
				<div className={styles.page2}>
					<img className={styles.img} src={page2Background} />
					<img className={styles.logo} src={blackLogo} />
					<div className={styles.page2_textBox}>
						<div className={styles.text_poppins + ' ' + styles.page2_title}>What is Hack?</div>
						<svg className={styles.rect}><rect className={styles.rect}></rect></svg>
						<div className={styles.text_chivo + ' ' + styles.page2_whoweare}>
							{'We are a student-run organization that aims to empower UCLA students to influence their world through code.' 
							+ ' We host events for coders of all skill levels. So whether you\'ve been to 10 hackathons, or you just learned'
							+ ' "hello world," we\'re happy to have you.'} 
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Homepage;