import PropTypes from 'prop-types';

export default function FriendListItem({ isOnline, name, avatar }) {
  return (
    <li className="item">
      <span className={isOnline ? 'is-online' : 'is-offline'}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
