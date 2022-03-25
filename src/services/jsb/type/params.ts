import {
  ECloseFileViewer,
  EHttpMethod,
  EEntityType,
  EHubMenu,
  ESearchType,
} from '../enum';

export interface AddInterestAreaParams {
  id: number;
}

export interface RemoveInterestAreaParams {
  id: number;
}

export interface CloseFileViewerParams {
  option: ECloseFileViewer;
}

export interface CloudFileProxyParams {
  url: string;
  method: Exclude<EHttpMethod, EHttpMethod.PUT>;
  body?: any;
  headers?: any;
}

export interface CreateCommentParams {
  storyId: number;
  message: string;
}

export interface CreateCommentReplyParams {
  commentId: number;
  message: string;
}

export interface CreateFileParams {
  fileData: string;
  fileName: string;
  fileExt: string;
}

export interface CreatePitchParams {
  visual: boolean;
}

export interface CreateStoryParams {
  channelId: number;
  title: string;
  description?: string;
  excerpt?: string;
  expiryTimeStamp?: number;
  expiryTimeStampTz?: string;
  fileData?: string;
  fileName?: string;
  fileExt?: string;
  notify?: boolean;
  visual?: boolean;
  attachmentURLs?: string[]; // array of URLs (may be a local file reference or a blob URL)
}

export interface EditStoryParams {
  storyId: number;
  channelId: number;
  title?: string;
  description?: string;
  excerpt?: string;
  expiryTimeStamp?: number;
  expiryTimeStampTz?: string;
  fileData?: string;
  fileName?: string;
  fileExt?: string;
  notify?: boolean;
  visual?: boolean;
  attachmentURLs?: string[];
}

export interface FollowUserParams {
  userId: number;
}

export interface UnfollowUserParams {
  userId: number;
}

export interface GetBookmarkListParams {
  entityName: EEntityType.STORY | EEntityType.FILE_COLLECTION;
  offset?: number;
  limit?: number;
  sortBy?: string;
}

export interface GetCRMDetailParams {
  accountId: number;
}

export interface GetDraftListParams {
  offset?: number;
  limit?: number;
  sortBy?: string;
}

export interface GetEntityParams {
  entityName: Extract<
    EEntityType,
    EEntityType.STORY | EEntityType.USER | EEntityType.FILE
  >;
  id: string | number;
}

export interface GetFeaturedListParams {
  entityName: EEntityType.STORY;
}

export interface GetListParams {
  entityName: Exclude<
    EEntityType,
    EEntityType.INTEREST_AREA | EEntityType.FILE_COLLECTION
  >;
  parentEntityName?: string;
  peid?: number;
  showAlias?: boolean; // Web, iOS 5.2, Windows 5.4.4, Android 5.2.1
  includeAttributes?: Array<string>; // Web, iOS 5.5.3, Windows 5.4.4, Android 5.2. currently available for story entity only
  createDateSince?: number; // timestamp - number of milliseconds since Unix Epoch, filters stories published on or after this timestamp
  createDateTo?: number;
  offset?: number;
  limit?: number;
  sortBy?: string;
}

export interface GetNewListParams {
  entityName: EEntityType.STORY;
  offset?: number;
  limit?: number;
}

export interface GetRecommendedListParams {
  entityName: EEntityType.STORY | EEntityType.FILE;
  offset?: number;
  limit?: number;
}

export interface LikeStoryParams {
  storyId: number;
}

export interface UnlikeStoryParams {
  storyId: number;
}

export interface OpenEntityParams {
  entityName: Exclude<EEntityType, EEntityType.INTEREST_AREA>;
  id: number;
  disableLegacyRouting?: boolean;
}

export interface OpenMenuParams {
  menuType: EHubMenu;
}

export interface OpenUrlParams {
  url: string;
}

export interface ProxyRequestParams {
  url: string;
  method: EHttpMethod;
  body?: any;
  headers?: any;
  disableCredentials?: boolean;
}

export interface ReadFileParams {
  fileId: number;
}

export interface SearchParams {
  keywords: string;
}

export interface SearchFilesParams {
  q: string;
  limit?: number;
  hidden?: boolean;
  shareable?: boolean;
}

export interface SearchResultParams {
  keywords: string;
  type: ESearchType;
  limit?: number;
  offset?: number;
}

export interface SearchStoriesParams {
  q: string;
  limit?: number;
  hidden?: boolean;
}

export interface SendEmailParams {
  to: string;
  cc: string;
  bcc: string;
  subject: string;
  body: string;
}

export interface SubscribeStoryParams {
  storyId: number;
}

export interface UnsubscribeStoryParams {
  storyId: number;
}

export interface CreateShareParams {
  to?: string[];
  cc?: string[];
  subject?: string;
  message?: string;
  files?: number[];
  visual?: boolean;
}
