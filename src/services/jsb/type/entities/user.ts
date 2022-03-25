/* eslint-disable import/no-cycle */
import { Story } from './story';
import { Group } from './group';

export interface UserBase {
  readonly id: number; // Unique identifier
  readonly title: string; // Title set by User
  readonly firstName: string; // First name
  readonly lastName: string; // Last name
  readonly email: string; // Email address
  readonly badgeColour: string; // Hex color of badge
  readonly badgeTitle: string; // Badge title

  readonly score: number; // User score
  readonly thumbnail: string; // Path to thumbnail
  readonly type: string; // Static value = 'user'
}

export interface User extends UserBase {
  readonly subscribedStories: readonly Story[]; // Stories the currrent User is subscribed to
  readonly followers: readonly User[]; // Followers of the current User
  readonly following: readonly User[]; // Users the current User is following
  readonly groups: readonly Group[]; // Groups the user is in
}
