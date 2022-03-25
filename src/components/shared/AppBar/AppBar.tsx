import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { ReactComponent as BrandLogo } from '../../../assets/images/bigtincan.svg';
import useStoreSelector from '../../../stores';
import { useBreakpointContext } from '../../App/BreakpointContext';

import styles from './AppBar.module.scss';
import Profile from './Profile';
import Loader from '../Loader/Loader';

const AppBar = observer(() => {
  const { breakpoint } = useBreakpointContext();
  const { getLoginUser, loginUser, state } = useStoreSelector(
    (store) => store.user
  );

  React.useEffect(() => {
    getLoginUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className={styles.primary}>
      <nav aria-label="Primary Navigation">
        <div className={styles.brand}>
          <BrandLogo />
        </div>
        {state.status === 'succeeded' && loginUser ? (
          <Profile
            user={loginUser}
            withDetail={breakpoint !== 'sm' && breakpoint !== 'xs'}
          />
        ) : (
          <Loader className={styles.loading} size="small" />
        )}
      </nav>
    </header>
  );
});

export default AppBar;
