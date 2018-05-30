import React, { Component } from 'react';
import styles from './Event.css';
import PropTypes from 'prop-types';
import testImage from './images/wrenches.png';

class Event extends Component {
	render() {
		return (
			<div className={styles.event}>
				<div className={styles.event_image_container}>
					<img className={styles.event_image} src={testImage}/>
					<div className={styles.event_title}>{this.props.title}</div>
				</div>
				<div className={styles.event_quarter_container}>
					<div className={styles.event_quarter}>{this.props.quarter}</div>
				</div>
				<div className={styles.event_desc_container}>
					<div className={styles.event_desc}>{this.props.desc}</div>
				</div>
			</div>
		);
	}
}

Event.propTypes = {
	title: PropTypes.string.isRequired,
	quarter: PropTypes.string.isRequired,
	desc: PropTypes.string.isRequired,
};

export default Event;