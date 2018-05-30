import React, { Component } from 'react';
import styles from './Event.css';
import testImage from './images/wrenches.png';

class Events extends Component {
	render() {
		return (
			<div className={styles.events_page}>
				<div className={styles.events_title}>Events</div>
				<div className={styles.events_container}>
					<div className={styles.event}>
						<div className={styles.event_image_container}>
							<img className={styles.event_image} src={testImage}/>
							<div className={styles.event_title}>Tech+You</div>
						</div>
						<div className={styles.event_quarter_container}>
							<div className={styles.event_quarter}>Spring</div>
						</div>
						<div className={styles.event_desc_container}>
							<div className={styles.event_desc}>Tech+You is a showcase of the ways computer science can be applied to diverse fields.</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Events;