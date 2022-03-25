import { Channel } from './channel';

export interface TabBase {
  // [key: string]: any; //indexable signature of the object
  readonly id: number; // Unique Identifier
  readonly name: string; // Tab Name
  readonly thumbnail: string; // Path to Tab Thumbnail
  readonly type: 'tab'; // static value ='tab'
  readonly channelCount: number; // Total number of Channels
  readonly isPersonal: boolean;
  readonly isShared: boolean;
}

export interface Tab extends TabBase {
  readonly channels?: readonly Channel[]; // List of Channels
}
