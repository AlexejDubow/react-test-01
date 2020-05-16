import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/index.module.css';

const StatisticTitle = ({ title }) => <h2 className={styles.title}>{title}</h2>;

export default StatisticTitle;

StatisticTitle.propTypes = {
  title: PropTypes.string,
};
StatisticTitle.defaultProps = {
  title: '',
};
