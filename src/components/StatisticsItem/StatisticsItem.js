import PropTypes from 'prop-types';

export default function StatisticsItem({ statItem }) {
  return (
    <li className="item">
      <span className="label">{statItem.label}</span>
      <span className="percentage">{statItem.percentage}%</span>
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
