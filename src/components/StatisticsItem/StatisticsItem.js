import PropTypes from 'prop-types';
import s from '../StatisticsItem/StatisticsItem.module.css';

export default function StatisticsItem({ statItem }) {
  const type = statItem.label.slice(1);

  return (
    <li className={s[type]}>
      <span className={s.label}>{statItem.label}</span>
      <span className={s.percentage}>{statItem.percentage}%</span>
    </li>
  );
}

StatisticsItem.propTypes = {
  statItem: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  }),
};
