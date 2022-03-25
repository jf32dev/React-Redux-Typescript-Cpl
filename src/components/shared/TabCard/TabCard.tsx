import * as React from 'react';
import cx from 'classnames';
import styles from './TabCard.module.scss';

type TProps = {
  title?: string;
  img: string;
  background: string;
  className?: string;
};

const TabCard = ({ title, img, background, className }: TProps) => {
  return (
    <div
      className={cx(styles['tab-card'], className)}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div style={{ background: `${background}` }}>
        <div>{title}</div>
      </div>
    </div>
  );
};

export default TabCard;
