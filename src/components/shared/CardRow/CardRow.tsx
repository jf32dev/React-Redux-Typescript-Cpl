import * as React from 'react';
import cx from 'classnames';
import styles from './CardRow.module.scss';
import useStoreSelector from '../../../stores';

type TProps = {
  className?: string;
};

const CardRow = ({ children, className }: React.PropsWithChildren<TProps>) => {
  const { getSystemClassName } = useStoreSelector((store) => store.user);
  return (
    <div
      className={cx(styles.wrapper, styles[`wrapper-${getSystemClassName()}`])}
    >
      <div className={cx(styles.row, className)}>{children}</div>
    </div>
  );
};
export default CardRow;
