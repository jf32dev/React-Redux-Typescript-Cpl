import { makeObservable, observable, runInAction, action } from 'mobx';
import bridge from '../services/bridge';
import { Channel, Story } from '../services/bridge/type/entities';
import { Nullable, StrictExtract } from '../type';
import { TCurrentEntity, TabContent } from '../typedef';
import { TEntityType } from '../services/bridge/type';
import Result from '../services/bridge/type/results';

class EntityStore {
  isLoading = false;

  entities: Nullable<TCurrentEntity[]> = null;

  object: (TabContent | TCurrentEntity)[] = [];

  constructor() {
    makeObservable(this, {
      entities: observable,
      isLoading: observable,
      object: observable,
      setObject: action,
    });
  }

  // object to store all the tab data and channel data.
  setObject = (object: TabContent | TCurrentEntity, channel = false) => {
    if (channel) {
      this.object = [...this.object, object];
    }
    this.object = [...this.object, object];
  };

  // remove data from object array; efficient when user go back
  resetObject = (type: StrictExtract<TEntityType, 'tab' | 'channel'>) => {
    this.object = type === 'channel' ? [this.object[0]] : [];
  };

  getEntities = async (
    type: StrictExtract<TEntityType, 'tab' | 'channel' | 'story'>,
    peid: number
  ) => {
    let result: Result<Story[] | Channel[]> | null = null;
    this.isLoading = true;
    switch (type) {
      case 'channel':
        if (peid) {
          result = await bridge.getList<Channel>({
            entityName: 'channel',
            offset: 0,
            limit: 30,
            peid,
            parentEntityName: 'tab',
            sortBy: 'name',
          });
        }

        break;

      case 'story':
        if (peid) {
          result = await bridge.getList<Story>({
            entityName: 'story',
            offset: 0,
            limit: 30,
            peid,
            parentEntityName: 'channel',
            sortBy: 'title',
          });
        }
        break;
      default:
    }

    if (result && !result.hasError && result.value) {
      let filteredResult: TCurrentEntity[] = [];

      if (type === 'channel') {
        filteredResult = (result.value as Channel[]).map<TCurrentEntity>(
          ({ id, name, thumbnail }) => ({
            id,
            name,
            img: thumbnail,
            type: 'channel',
          })
        );
      }

      if (type === 'story') {
        filteredResult = (result.value as Story[]).map<TCurrentEntity>(
          ({
            id,
            title,
            thumbnail,
            likesCount,
            commentCount,
            fileCount,
            createDate,
          }) => ({
            id,
            name: title,
            type: 'story',
            img: thumbnail,
            likesCount,
            commentCount,
            fileCount,
            createDate,
          })
        );
      }

      runInAction(() => {
        this.entities = filteredResult;
      });
    }

    runInAction(() => {
      this.isLoading = false;
    });
  };
}

export default EntityStore;
