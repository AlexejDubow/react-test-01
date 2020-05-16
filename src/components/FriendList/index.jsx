import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/index.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map((el) => (
      <li className={styles.item} key={el.id}>
        <span className={styles.status} data-online={el.isOnline} />
        <img className={styles.avatar} src={el.avatar} alt="avatar" width="48" />
        <p className={styles.name}>{el.name}</p>
      </li>
    ))}
  </ul>
);
export default FriendList;
FriendList.propTypes = {
  friends: PropTypes.shape(
    {
      avatar: PropTypes.string,
      name: PropTypes.number,
      isOnline: PropTypes.number,
    }
  )
};
