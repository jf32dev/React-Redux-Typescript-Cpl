import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import '../../style/global.scss';
import styles from './App.module.scss';
import { BreakpointProvider } from './BreakpointContext';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import EntityPage from '../EntityPage';

const App = () => {
  const { breakpoint, orientation } = useBreakpoint();
  // Name the application based on the package.json name
  React.useEffect(() => {
    if (process.env.BTC_GS_APP_NAME) {
      window.document.title = process.env.BTC_GS_APP_NAME;
    } else {
      window.document.title = 'GS Custom Application';
    }
  }, []);

  return (
    <BreakpointProvider value={{ breakpoint, orientation }}>
      <div className={styles.app}>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={EntityPage} path="/:type/:id" exact />
        </Switch>
      </div>
    </BreakpointProvider>
  );
};

export default App;
