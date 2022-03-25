import * as React from 'react';
import styles from './NoContent.module.scss';

type TProps = {
  message?: string;
};

const NoContent = ({ message }: TProps) => (
  <div className={styles.noContent}>{message || 'No Content'}</div>
);

export default NoContent;
