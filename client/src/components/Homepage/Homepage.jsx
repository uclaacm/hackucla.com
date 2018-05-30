import React, { Component } from 'react';
import splashBackground from './images/SplashBackground.svg';
import page2Background from './images/Page2Background.svg';
import blackLogo from './images/logo-hack-black.png';
import styles from './Homepage.css';
import Event from './Event';
import testImage from './images/wrenches.png';
import testImage2 from './images/page2bg.png';

const events = [
	{
		title: 'Tech+You', 
		quarter: 'Spring', 
		desc: 'Tech+You is a showcase of the ways computer science can be applied to diverse fields.',
		image: testImage
	},
	{
		title: 'Learn.js',
		quarter: 'Spring',
		desc: 'Learn.js is a workshop series exploring the exciting uses of JavaScript.',
		image: testImage2
	}
];

class Homepage extends Component {
	render() {
		return (
			<div>
				<div className={styles.page1}>
					<img className={styles.splashImg} src={splashBackground} alt="gears in background" />
					<div className={styles.page1_textBox}>
						<div className={styles.text_poppins + ' ' + styles.page1_tagline}>Move Fast<span className={styles.red}>.</span></div>
						<div className={styles.text_poppins + ' ' + styles.page1_tagline}>Build Things<span className={styles.red}>.</span></div>
						<div className={styles.text_poppins + ' ' + styles.page1_subtagline}>Start Hacking.</div>
					</div>
				</div>
				<div className={styles.page2}>
					<img className={styles.splashImg} src={page2Background} alt="red and purple blocks" />
					<div className={styles.page2Content}>
						<div className={styles.page2_textBox}>
							<div className={styles.text_poppins + ' ' + styles.page2_title}>What is Hack?</div>
							<div className={styles.rectContainer}><hr className={styles.rect} /></div>
							<div className={styles.text_chivo + ' ' + styles.page2_whoweare}>
								{`We are a student-run organization that aims to empower UCLA students to influence their world through code. 
							We host events for coders of all skill levels. So whether you've been to 10 hackathons, or you just learned
							"hello world," we're happy to have you.`}
							</div>
						</div>
						<img className={styles.logo} src={blackLogo} alt="Hack logo of wrench in light bulb" />						
					</div>
				</div>
				<div className={styles.events_page}>
					<div className={styles.events_title}>Events</div>
					{events.map(event => {
						return <Event key={event.title} 
							title={event.title} 
							quarter={event.quarter} 
							desc={event.desc} 
							image={event.image}/>;
					})}				
				</div>
			</div>
		);
	}
}

export default Homepage;