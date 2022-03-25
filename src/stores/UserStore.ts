import { action, makeObservable, observable, runInAction } from 'mobx';
import bridge from '../services/bridge';
import { User } from '../services/bridge/type/entities';
import { Nullable } from '../type';
import { TStoreState } from './type';

/**
 * Mobx 6 is moving away from decorators
 * Best Practices is not to move away from decorators.
 * and utilisng more makeObservable and makeAutoObservable
 *
 * https://mobx.js.org/observable-state.html#makeobservable
 * https://mobx.js.org/enabling-decorators.html
 */
class UserStore {
  loginUser: Nullable<User> = undefined;

  appName: Nullable<string> = undefined;

  appVersion: Nullable<string> = undefined;

  state: TStoreState = {
    /**
     * NOTE:
     * Move away from boolean state like isLoading or loading or load
     * since it is limiting us to only have 2 possibilities: 'loading' and 'not loading'
     * in Real World Scenario, it's possible for a request to actually be in many different states
     */
    status: 'idle',
    error: null,
  };

  constructor() {
    makeObservable(this, {
      loginUser: observable,
      appName: observable,
      appVersion: observable,
      getLoginUser: action,
    });
  }

  getLoginUser = async () => {
    this.state.status = 'loading';
    // const error: string | null = null;
    const system = await bridge.getSystemConfig();

    if (system.hasError || !system.value) {
      runInAction(() => {
        this.state.status = 'failed';
        this.state.error = JSON.stringify(system.error);
      });
      return;
    }

    const user = await bridge.getEntity<User>({
      entityName: 'user',
      id: system.value.userId,
    });

    if (user.hasError) {
      runInAction(() => {
        this.state.status = 'failed';
        this.state.error = JSON.stringify(user.error);
      });
      return;
    }

    runInAction(() => {
      this.loginUser = user.value;
      this.state.status = 'succeeded';
      this.state.error = null;
    });
  };

  getSystemClassName = () => {
    if (this.appName === 'Hub for iOS') {
      return 'ios';
    }
    if (this.appName === 'Hub for Windows') {
      return 'windows';
    }
    return 'default';
  };
}

export default UserStore;
