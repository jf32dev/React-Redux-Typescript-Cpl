export interface InterestArea {
  readonly id: number; // Unique identifier
  readonly color: string; // Hex colour
  readonly isSubscribed: boolean; // Current user is subscribed
  readonly name: string; // Interest Area name
  readonly thumbnail: string; // URL to thumbnail
  readonly type: string; // Static value = 'interestArea'
}
