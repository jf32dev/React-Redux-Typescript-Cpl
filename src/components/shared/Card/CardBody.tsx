import * as React from 'react';
import cx from 'classnames';
import styles from './CardBody.module.scss';

type TProps = {
  className?: string;
};
const CardBody = ({ className, children }: React.PropsWithChildren<TProps>) => {
  return <div className={cx(styles.body, className)}>{children}</div>;
};

CardBody.displayName = 'CardBody';
export default CardBody;
