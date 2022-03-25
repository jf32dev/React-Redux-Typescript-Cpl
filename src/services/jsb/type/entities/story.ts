/* eslint-disable import/no-cycle */
import { Tag } from './tag';
import { User } from './user';
import { Channel } from './channel';
import { File } from './file';

export interface StoryBase {
  readonly id: number; // Unique identifier (Internally referred to as `permId`)
  readonly title: string;
  readonly excerpt: string; // Excerpt of Story message (plain text - not supported on device)
  readonly createDate: number; // Timestamp of Story creation on server
  readonly expiryDate: number; // Timestamp when Story will be archived by the server
  readonly quickFileId: number; // Quickfile ID
  readonly quickFile: File; // File object
  readonly quickLink: string; // URL of Quicklink
  readonly thumbnail: string; // Path to thumbnail
  readonly type: 'story'; // Static value = 'story'
  readonly isBookmark: boolean; // Current user bookmarked the Story
  readonly isFeed: boolean; // Story is from an RSS feed
  readonly isLiked: boolean; // Current user liked the Story
  readonly isProtected: boolean; // User requires password to access Story. Protected Stories are not saved on device
  readonly isUnread: boolean; // Current user has not read the Story
  readonly commentCount: number; // Total number of Comments
  readonly fileCount: number; // Total number of Files
  readonly likesCount: number; // Number of Likes
  readonly initialCreateDate: number;
  readonly initialPublishDate: number;
  readonly badgeTitle: string;
  readonly badgeColour: string; // Hex color of Content IQ badge
}

export interface Story extends StoryBase {
  readonly message?: string; // Story description (normally HTML)
  readonly tags?: readonly Tag[] | readonly string[]; // List of tags
  readonly isSubscribed?: boolean; // Current user subscribed to the Story
  readonly author?: User; // User object of author (Not returned if `isFeed`)
  readonly subscribers?: User; // List of subscribers

  readonly channel?: Channel; // Primary Channel
  readonly comments?: readonly Comment[]; // Comments on Story

  readonly events?: Event; // Events related to Story

  readonly files?: File[]; // Files attached to Story
  readonly enableAnnotation?: boolean; // Annotations allowed on Story's files
  readonly readCount?: number; // Total number of time Story opened by users
  readonly notify?: boolean; // Story will send push notifications when updated
  readonly sequence?: number; // Priority of Story, use for sorting by priority
  readonly sharingType?: number; // Sharing Type bit mask value, refers to: email, server, facebook, twitter, linkedIn
  readonly socialURL?: string; // Link of the public URL for sharing

  // This marks as optional since ** only returned in the getFeaturedList API **
  readonly featuredImage?: string; // Featured Image URL for featured stories.
}
