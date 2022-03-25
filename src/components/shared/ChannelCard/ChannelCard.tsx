import * as React from 'react';
import cx from 'classnames';
import styles from './ChannelCard.module.scss';
import { ChannelProps } from '../../../typedef';
import { decodeEntities } from '../../../utils/htmlEntities';
import defaultImage from '../../../assets/images/channel.svg';

const ChannelCard = ({ className, onClick, description }: ChannelProps) => {
  return (
    <div className={cx(styles.card, className)} onClick={onClick}>
      <div className={styles.figure}>
        <img
          alt=""
          src={defaultImage}
          onError={(e) => {
            e.currentTarget.src = defaultImage;
          }}
        />
      </div>
      <div className={styles.description}>
        <div className={styles.title}>{decodeEntities(description)}</div>
      </div>
    </div>
  );
};

export default ChannelCard;
