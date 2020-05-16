import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/index.module.css';

const StatisticList = ({ stats }) => (
  <ul className={styles.statList}>
    {stats.map((el) => (
      <li className={styles.item} key={el.id}>
        <span className={styles.label}>{el.label}</span>
        <span className={styles.percentage}>
          {el.percentage}
          %
        </span>
      </li>
    ))}
  </ul>
);

export default StatisticList;

StatisticList.propTypes = {
  stats: PropTypes.array.isRequired,
};
