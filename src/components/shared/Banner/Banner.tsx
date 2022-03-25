import * as React from 'react';
import cx from 'classnames';
import styles from './Banner.module.scss';

type TProps = {
  BannerImg?: string;
  className?: string;
  contentClassName?: string;
};

const Banner = ({
  children,
  BannerImg,
  className,
  contentClassName,
}: React.PropsWithChildren<TProps>) => {
  return (
    <div
      className={cx(styles.banner, className)}
      style={{ backgroundImage: `url(${BannerImg})` }}
    >
      <div className={cx(styles['banner-content'], contentClassName)}>
        {children}
      </div>
    </div>
  );
};

export default Banner;
