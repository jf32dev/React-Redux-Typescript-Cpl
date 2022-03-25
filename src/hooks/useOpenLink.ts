import * as React from 'react';
import bridge from '../services/bridge/bridge';

type HookReturn = [(url: string) => Promise<void>, string | null];
export function useOpenLink(): HookReturn {
  const [error, setError] = React.useState<string | null>(null);

  const openLink = React.useCallback(async (url: string) => {
    const open = await bridge.openUrl({
      url,
    });
    if (open.hasError) {
      setError(JSON.stringify(open.error));
    }
  }, []);
  return [openLink, error];
}
