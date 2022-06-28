import PropTypes from 'prop-types';
import s from './Profile.module.css';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <section className="section">
      <div className="container">
        <div className={s.profile}>
          <div className={s.description}>
            <img
              src={avatar}
              alt="User avatar"
              className={s.avatar}
              width="100"
              heigth="100"
            />
            <p className={s.name}>{username}</p>
            <p className={s.tag}>@{tag}</p>
            <p className={s.location}>{location}</p>
          </div>

          <ul className={s.stats}>
            <li className={s.item}>
              <span className={s.label}>Followers</span>
              <span className={s.quantity}>{stats.followers}</span>
            </li>
            <li className={s.item}>
              <span className={s.label}>Views</span>
              <span className={s.quantity}>{stats.views}</span>
            </li>
            <li className={s.item}>
              <span className={s.label}>Likes</span>
              <span className={s.quantity}>{stats.likes}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
