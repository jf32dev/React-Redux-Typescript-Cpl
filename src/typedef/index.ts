import { TEntityType } from '../services/bridge/type';
import { StrictExclude, StrictExtract } from '../type';

export type EntityViewType = {
  entityType: string;
  entityId: number;
  img: string;
  title?: string;
  name?: string;
};

export type TypeEntity = {
  type: string;
  id: string;
};

export type ChannelProps = {
  id: number;
  className?: string;
  figure?: string;
  description: string;
  onClick: () => void;
  type: 'tab' | 'channel' | 'story';
};

export type TCurrentEntity = {
  id: number;
  name: string;
  type: StrictExtract<TEntityType, 'tab' | 'channel' | 'story'>;
  likesCount?: number;
  commentCount?: number;
  fileCount?: number;
  createDate?: number;
  img?: string;
  title?: string;
};

type ActionsContentsBase = {
  id: number;
  title: string;
};

type BaseCardType = {
  img: string;
  title?: string;
  background: string;
  name?: string;
  id?: number;
};

type EntityContent = {
  case: 'entity' | 'hardcoded_entity';
  entityId: number;
  entityType: StrictExclude<TEntityType, 'interestArea'>;
} & ActionsContentsBase;

type URLContent = {
  case: 'url';
  url: string;
} & ActionsContentsBase;

export type TabContent = {
  case: 'entity';
  entityId: number;
  entityType: StrictExtract<TEntityType, 'channel' | 'tab'>;
} & BaseCardType;

export type ChannelContent = {
  case: 'entity';
  entityId: number;
  entityType: StrictExtract<TEntityType, 'channel' | 'tab'>;
  type?: string;
  id?: number;
};

export type ButtonEntity = EntityContent | URLContent;
export type ObjectCollection = TabContent | EntityViewType;
