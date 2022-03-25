import { User } from './user';
import { Story } from './story';

export interface CommentBase {
  readonly id: number; // Unique identifier
  readonly createDate: number; // Timestamp of Comment creation on server
  readonly message: string; // Comment content
  readonly comments: readonly Comment[]; // List of comment replies
  readonly author: User; // User object of author
  readonly isPending: boolean; // Pending state for syncing to server
  readonly type: string; // Static value = 'comment'
}

export interface Comment extends CommentBase {
  readonly story?: Story; // Related Story (included in searchResult)
}
