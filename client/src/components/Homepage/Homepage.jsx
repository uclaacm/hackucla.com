import React, { Component } from 'react';
import splashBackground from './images/SplashBackground.svg';
import page2Background from './images/Page2Background.svg';
import blackLogo from './images/logo-hack-black.png';
import styles from './Homepage.css';

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
						<hr className={styles.rect}/>
						<div className={styles.text_chivo + ' ' + styles.page2_whoweare}>
							{`We are a student-run organization that aims to empower UCLA students to influence their world through code. 
							We host events for coders of all skill levels. So whether you've been to 10 hackathons, or you just learned
							"hello world," we're happy to have you.`} 
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Homepage;