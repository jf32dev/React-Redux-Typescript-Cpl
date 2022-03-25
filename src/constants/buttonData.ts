import { ButtonEntity, TCurrentEntity } from '../typedef';

export const HOME_BUTTONS: ButtonEntity[] = [
  {
    id: 1,
    title: 'Sales Training(Zunos)',
    case: 'url',
    url: 'https://app.zunos.com',
  },
  {
    id: 2,
    title: 'Blog(Sales Motivation)',
    case: 'hardcoded_entity',
    entityId: 391099,
    entityType: 'channel',
  },
];

export const HARDCODED_CHANNEL: TCurrentEntity = {
  id: 391099,
  name: 'Tips & Tricks for Sales Motivation',
  type: 'channel',
};

export const CHANNEL_ID = 391099;
