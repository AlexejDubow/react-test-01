import React from 'react';
import StatisticTitle from './StatisticTitle';
import StatisticList from './StatisticList';
import styles from './styles/index.module.css';

const Statistic = ({ title, stats }) => (
  <section className={styles.statistics}>
    <StatisticTitle title={title} />
    <StatisticList stats={stats} />
  </section>
);
export default Statistic;
