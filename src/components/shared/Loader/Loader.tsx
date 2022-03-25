import * as React from 'react';
import cx from 'classnames';
import styles from './Loader.module.scss';

type TLoader = {
  size?: 'large' | 'medium' | 'small' | 'xsmall';
  spinnerClassName?: string;
  className?: string;
};

const Loader = ({ size = 'medium', spinnerClassName, className }: TLoader) => (
  <div className={cx(styles.loader, className)}>
    <div
      className={cx(
        styles.spinner,
        styles[size],
        spinnerClassName,
        styles.default
      )}
    />
  </div>
);

export default Loader;
