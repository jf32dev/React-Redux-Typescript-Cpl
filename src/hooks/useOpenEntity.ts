import * as React from 'react';
import bridge from '../services/bridge/bridge';
import { StrictExclude } from '../type';
import { TEntityType } from '../services/bridge/type';

type HookReturn = [
  (
    type: StrictExclude<TEntityType, 'interestArea'>,
    id: number
  ) => Promise<void>,
  string | null
];

export function useOpenEntity(): HookReturn {
  const [error, setError] = React.useState<string | null>(null);

  const openEntity = React.useCallback(
    async (type: StrictExclude<TEntityType, 'interestArea'>, id: number) => {
      const open = await bridge.openEntity({
        entityName: type,
        id,
        disableLegacyRouting: true,
      });
      if (open.hasError) {
        setError(JSON.stringify(open.error));
      }
    },
    []
  );
  return [openEntity, error];
}
