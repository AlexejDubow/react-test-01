import React from 'react';
import Profile from './Profile';
import Statistic from './Statistic';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';

import user from './Profile/db/user.json';
import stats from './Statistic/db/statistical-data.json';
import friends from './FriendList/db/friends.json';
import transactions from './TransactionHistory/db/transactions.json';

const App = (
  <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      alt="user avatar"
    />
    <Statistic
      title="Upload stats"
      stats={stats}
    />
    <FriendList
      friends={friends}
    />
    <TransactionHistory
      items={transactions}
    />
  </>
);
export default App;
