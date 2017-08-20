import * as cx from 'classnames';
import * as React from 'react';
import * as styles from './index.scss';

export interface ColumnProperties extends React.HTMLAttributes<HTMLDivElement> {
  width?: number;
}

export default function Column({width = 1, ...props}: ColumnProperties) {
  return (
    <div style={{flex: width}} {...props} className={cx(styles.column, props.className)}>
      {props.children}
    </div>
  );
}