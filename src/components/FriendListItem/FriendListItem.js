import PropTypes from 'prop-types';
import s from '../FriendListItem/FriendListItem.module.css';

export default function FriendListItem({ isOnline, name, avatar }) {
  return (
    <li className={s.item}>
      <span className={isOnline ? s.isOnline : s.isOffline}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
