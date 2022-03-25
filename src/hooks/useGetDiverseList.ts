import { useState, useEffect, useCallback, DependencyList } from 'react';
import Result from '../services/bridge/type/results';
import { TStatus } from '../stores/type';

export const useGetDiverseList = <T>(
  fn: () => Promise<Result<T[]>>,
  deps: DependencyList = []
): [T[], TStatus, string] => {
  const [list, setList] = useState<T[]>([]);
  const [status, setStatus] = useState<TStatus>('idle');
  const [error, setError] = useState<string>('');

  const getList = useCallback(async () => {
    setStatus('loading');
    const result = await fn();
    if (result.hasError) {
      setStatus('failed');
      setError(JSON.stringify(result.error));
      return;
    }
    if (result.value) {
      setList(result.value);
      setStatus('succeeded');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [list, status, error];
};

export default useGetDiverseList;
