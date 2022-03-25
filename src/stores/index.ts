import * as React from 'react';
import { RouterStore } from 'mobx-react-router';
import UserStore from './UserStore';
import EntityStore from './EntityStore';

/**
 * Primary Global Store
 * NOTE:
 * if stores need to know each other, change below implementation and follow below for best practices
 * https://mobx.js.org/defining-data-stores.html#combining-multiple-stores
 */
export const store = Object.freeze({
  route: new RouterStore(),
  user: new UserStore(),
  entity: new EntityStore(),
});

/**
 * Store Context
 */
const MobxStoreContext = React.createContext<typeof store | null>(null);
export const StoreProvider = MobxStoreContext.Provider;

/**
 * Custom Hook to access mobx store.
 * Example Usage: useStoreSelector(store => store.route)
 */

const useStoreSelector = <TSelected = unknown>(
  selector: (state: typeof store) => TSelected
): TSelected => {
  const context = React.useContext(MobxStoreContext);
  if (!context) {
    throw new Error('No Store Context Available');
  }
  return selector(context);
};

/**
 * WARNING: DEPRECATED, Not suggesting to use it, kept for migration
 * will soon to be deleted.
 */
export const useStores = () => React.useContext(MobxStoreContext);
export default useStoreSelector;
