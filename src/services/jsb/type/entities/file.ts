// eslint-disable-next-line import/no-cycle
import { Story } from './story';
import { EFileSharingType } from '../../enum';

export interface File {
  readonly id: number; // Unique identifier
  readonly category: string; // Category of file (image, video etc.)
  readonly createDate: number; // Timestamp of creation on server
  readonly description: string; // File description
  readonly downloadURL: string; // URL to download file (only on Web)
  readonly editedLocally: boolean; // File has been edited locally
  readonly filename: string; // File name
  readonly isDownloaded: boolean; // File has been downloaded to device. Web: Returns `null`
  readonly sharingType: EFileSharingType; // sharingType: 0/1/2 (blocked, optional, mandatory). Android: Fixed value `mandatory`
  readonly size: number; // Size of the file in bytes
  readonly story: Story; // Related Story
  readonly thumbnail: string; // Path to thumbnail
  readonly type: string; // Static value = 'file'
  readonly url?: string; // URL to view file
}

export interface CreateFile {
  readonly tempURL: string;
}
