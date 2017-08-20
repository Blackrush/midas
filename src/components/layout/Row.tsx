import * as React from 'react';
import * as styles from './index.scss';

export default (props: {children: {}}) => (
  <div className={styles.row}>
    {props.children}
  </div>
);