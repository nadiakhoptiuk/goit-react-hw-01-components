import PropTypes from 'prop-types';
import s from './TransactionItem.module.css';

export default function TransactionItem({ type, amount, currency }) {
  return (
    <tr className={s.row}>
      <td className={s.cell}>{type}</td>
      <td className={s.cell}>{amount}</td>
      <td className={s.cell}>{currency}</td>
    </tr>
  );
}

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
