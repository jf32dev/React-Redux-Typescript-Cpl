import * as React from 'react';
import cx from 'classnames';
import styles from './EntityContainer.module.scss';

type TProps = {
  className?: string;
};

const EntityContainer = ({
  children,
  className,
}: React.PropsWithChildren<TProps>) => (
  <div className={cx(styles['entity-container'], className)}>{children}</div>
);

export default EntityContainer;
