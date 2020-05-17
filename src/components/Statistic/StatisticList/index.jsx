import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/index.module.css';

const StatisticList = ({ stats }) => (
  <ul className={styles.statList}>
    {stats.map(({ id, label, percentage }) => (
      <li className={styles.item} key={id}>
        <span className={styles.label}>{label}</span>
        <span className={styles.percentage}>
          {percentage}
          %
        </span>
      </li>
    ))}
  </ul>
);

export default StatisticList;

StatisticList.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  })).isRequired,
};
