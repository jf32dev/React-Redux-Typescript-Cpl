import * as React from 'react';
import cx from 'classnames';
import styles from './CardThumbnail.module.scss';

type TProps = {
  className?: string;
};
const CardThumbnail = ({
  className,
  children,
}: React.PropsWithChildren<TProps>) => {
  return <div className={cx(styles.thumbnail, className)}>{children}</div>;
};

CardThumbnail.displayName = 'CardThumbnail';
export default CardThumbnail;
