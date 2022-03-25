import * as React from 'react';
import {
  Story,
  File,
  Channel,
  User,
  Tab,
} from '../services/bridge/type/entities';
import { TStatus } from '../stores/type';
import bridge from '../services/bridge';
import { GetListParams } from '../services/bridge/type/params';

type TGetList = Story | File | Tab | Channel | User;

const useGetList = <T extends TGetList>(
  params: GetListParams
): [T[], TStatus, string | null] => {
  const [status, setStatus] = React.useState<TStatus>('idle');
  const [error, setError] = React.useState<string | null>(null);
  const [content, setContent] = React.useState<T[]>([]);

  const getList = React.useCallback(async () => {
    setStatus('loading');
    const list = await bridge.getList<T>(params);

    if (list.hasError) {
      setStatus('failed');
      setError(list.error);
      return;
    }
    if (list.value) {
      setContent(list.value);
      setStatus('succeeded');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    getList();
  }, [getList]);

  return [content, status, error];
};

export default useGetList;
