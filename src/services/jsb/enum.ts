export enum EAppName {
  WEB = 'Hub Web App',
  IOS = 'Hub for iOS',
  ANDROID = 'Hub for Android',
  WINDOWS = 'Hub for Windows',
}
export enum ECloseFileViewer {
  ALL = 'all',
  CURRENT = 'currentTab',
}

export enum EHttpMethod {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export enum EFileSharingType {
  BLOCKED,
  OPTIONAL,
  MANDATORY,
}

export enum EEntityType {
  TAB = 'tab',
  CHANNEL = 'channel',
  STORY = 'story',
  FILE = 'file',
  FILE_COLLECTION = 'fileCollection',
  USER = 'user',
  LINK = 'link',
  INTEREST_AREA = 'interestArea',
}
export enum ESearchType {
  ALL = 'all',
  TAGS = 'tags',
  STORIES = 'stories',
  FILES = 'files',
  COMMENTS = 'comments',
  USERS = 'users',
  FEEDS = 'feeds',
  EVENTS = 'events',
  NOTES = 'notes',
}
export enum EHubMenu {
  CHAT = 'chat',
  COMPANY = 'company',
  CONTENT = 'content',
  ME = 'me',
  MEETINGS = 'meetings',
  NOTES = 'notes',
  NOTIFICATIONS = 'notifications',
}
