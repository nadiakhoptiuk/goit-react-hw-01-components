import PropTypes from 'prop-types';
import TransactionItem from '../TransactionItem/TransactionItem';
import s from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <section className="section">
      <div className="container">
        <table className={s.transactionHistory}>
          <thead>
            <tr className={s.headRow}>
              <th className={s.head}>Type</th>
              <th className={s.head}>Amount</th>
              <th className={s.head}>Currency</th>
            </tr>
          </thead>

          <tbody>
            {items.map(item => {
              return (
                <TransactionItem
                  key={item.id}
                  type={item.type}
                  amount={item.amount}
                  currency={item.currency}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
