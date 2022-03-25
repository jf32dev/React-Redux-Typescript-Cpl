import {
  GetListParams,
  GetEntityParams,
  OpenUrlParams,
  OpenEntityParams,
  GetBookmarkListParams,
  SearchStoriesParams,
  AddInterestAreaParams,
  CloseFileViewerParams,
  CloudFileProxyParams,
  ProxyRequestParams,
  CreateCommentParams,
  CreateCommentReplyParams,
  CreateFileParams,
  CreatePitchParams,
  CreateStoryParams,
  EditStoryParams,
  FollowUserParams,
  GetCRMDetailParams,
  GetDraftListParams,
  GetFeaturedListParams,
  GetNewListParams,
  GetRecommendedListParams,
  LikeStoryParams,
  UnlikeStoryParams,
  OpenMenuParams,
  ReadFileParams,
  SearchParams,
  SearchFilesParams,
  SendEmailParams,
  SubscribeStoryParams,
  UnsubscribeStoryParams,
  RemoveInterestAreaParams,
  SearchResultParams,
  CreateShareParams,
} from './params';

export interface JSBRequest {
  action: string;
  params?:
    | GetListParams
    | GetEntityParams
    | OpenUrlParams
    | OpenEntityParams
    | GetBookmarkListParams
    | SearchStoriesParams
    | GetEntityParams
    | GetListParams
    | GetBookmarkListParams
    | OpenUrlParams
    | OpenEntityParams
    | AddInterestAreaParams
    | RemoveInterestAreaParams
    | CloseFileViewerParams
    | CloudFileProxyParams
    | ProxyRequestParams
    | CreateCommentParams
    | CreateCommentReplyParams
    | CreateFileParams
    | CreatePitchParams
    | CreateStoryParams
    | EditStoryParams
    | FollowUserParams
    | GetCRMDetailParams
    | GetDraftListParams
    | GetFeaturedListParams
    | GetNewListParams
    | GetRecommendedListParams
    | LikeStoryParams
    | UnlikeStoryParams
    | OpenMenuParams
    | ReadFileParams
    | SearchParams
    | SearchFilesParams
    | SearchResultParams
    | SearchStoriesParams
    | SendEmailParams
    | SubscribeStoryParams
    | UnsubscribeStoryParams
    | CreateShareParams;
}
