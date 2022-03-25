import { Channel } from './channel';
import { User } from './user';
import { Tag } from './tag';
import { EFileSharingType } from '../../enum';
import { Story } from './story';

export interface SearchStory {
  readonly id: number;
  readonly title: string;
  readonly channel: Channel;
  readonly excerpt: string;
  readonly author: User;
  readonly tags: Tag[];
  readonly fileCount: number;
  readonly thumbnail: string;
  readonly quickFileId: number;
  readonly quickLink: string;
  readonly createDate: number;
  readonly type: string;
}

export interface SearchFile {
  readonly id: number;
  readonly filename: string;
  readonly description: string;
  readonly tags: Tag[];
  readonly downloadURL: string;
  readonly sharingType: EFileSharingType;
  readonly category: string;
  readonly thumbnail: string;
  readonly story: Story;
}
