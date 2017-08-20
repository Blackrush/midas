import * as React from 'react';
import * as styles from './Money.scss';

import * as numeral from 'numeral';

export interface MoneyProperties {
  amount: number;
}

export default class Money extends React.Component<MoneyProperties> {
  render() {
    return (
      <div className={styles.container}>
        <span className={styles.number}>{numeral(this.props.amount).format('0,0.00')}</span>
        <span className={styles.sign}>€</span>
      </div>
    );
  }
}