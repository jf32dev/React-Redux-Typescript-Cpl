import { File } from './file';

export interface FileCollection {
  readonly id: number; // Unique identifier
  readonly name: string; // Collection name
  readonly createDate: number; // Timestamp of creation on server
  readonly files: readonly File[]; // List of Files
  readonly type: string; // Static value = 'fileCollection'
}
