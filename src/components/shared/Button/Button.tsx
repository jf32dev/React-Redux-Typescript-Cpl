import * as React from 'react';
import cx from 'classnames';
import styles from './Button.module.scss';

type TProps = {
  title: string;
  onClick: () => void;
  className?: string;
};

const Button = ({ title, onClick, className }: TProps) => {
  return (
    <button
      className={cx(styles.button, className)}
      type="button"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
