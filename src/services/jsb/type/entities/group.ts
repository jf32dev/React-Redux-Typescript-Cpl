// eslint-disable-next-line import/no-cycle
import { User } from './user';

export interface GroupBase {
  readonly id: number; // Unique identifier
  readonly title: string; // Group title
  readonly groupType: string; // ...
  readonly type: string; // Static value = 'group'
}
export interface Group extends GroupBase {
  readonly users?: readonly User[]; // List of users
}
