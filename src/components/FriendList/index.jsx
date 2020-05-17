import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/index.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(({
      id, isOnline, avatar, name,
    }) => (
      <li className={styles.item} key={id}>
        <span className={styles.status} data-online={isOnline} />
        <img className={styles.avatar} src={avatar} alt="avatar" />
        <p className={styles.name}>{name}</p>
      </li>
    ))}
  </ul>
);
export default FriendList;
FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.exact({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
  })).isRequired,
};
