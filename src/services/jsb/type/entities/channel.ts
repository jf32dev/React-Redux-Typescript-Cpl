// eslint-disable-next-line import/no-cycle
import { Story } from './story';

export interface ChannelBase {
  readonly id: number; // Unique identifier
  readonly name: string; // Channel name
  readonly thumbnail: string; // Path to thumbnail
  readonly type: 'channel'; // Static value = 'channel'
  readonly defaultSortBy: string; // Default Story sorting attribute
  readonly description: string; // Channel description
  readonly storyCount: number; // Total number of Stories
  readonly isFeed: boolean; // Channel contains feed articles
  readonly isHidden: boolean; // Hidden Channel
  readonly isReadable: boolean; // Current user can read this Channel
  readonly isSubscribed: boolean; // Current user is subscribed to this Channel
  readonly isWritable: boolean; // Current user can publish to this Channel
}

export interface Channel extends ChannelBase {
  readonly stories?: readonly Story[]; // List of Stories
}
