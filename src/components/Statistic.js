import React from 'react';
import StatisticTitle from './StatisticTitle'
// import StatisticList from './StatisticList'
// import style from './styles/Profile.module.css';
// import PropTypes from 'prop-types';

const Statistic = () => {
  // const { followers, views, likes } = stats;

  return (
      <section className="statistics">
        {/* <StatisticTitle title={title}/> */}
        <StatisticTitle />
    
        {/* <StatisticList
        id={id}
        label={label}
        percentage={percentage}
        /> */}
      </section>
  );
};
export default Statistic;