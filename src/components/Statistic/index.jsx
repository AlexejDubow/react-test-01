import React from 'react';
import PropTypes from 'prop-types';
import StatisticList from './StatisticList';
import styles from './styles/index.module.css';

const Statistic = ({ title = '', stats }) => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>{title}</h2>
    <StatisticList stats={stats} />
  </section>
);
export default Statistic;

Statistic.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  })).isRequired,
};
