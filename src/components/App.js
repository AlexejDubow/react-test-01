import React from 'react';
import ReactDOM from 'react-dom';
// import Profile from './Profile';
import Statistic from './Statistic'

// import user from './data/user.json';
// import statisticsData from './data/statistical-data.json';

ReactDOM.render(
  <div>
    {/* <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    /> */}
    <Statistic />
  </div>,
  document.getElementById('root'),
);
