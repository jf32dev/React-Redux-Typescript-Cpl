import { Story } from './story';

export interface EventBase {
  readonly id: number; // Unique identifier
  readonly name: string; // Name of Event
  readonly endDate: number; // Timestamp of Event end date
  readonly startDate: number; // Timestamp of Event start date
  readonly timezone: string; // Timezone string, e.g. 'Australia/Sydney' (not supported on device)
  readonly type: string; // Static value = 'event'
}

export interface Event extends EventBase {
  readonly story?: Story; // Related Story (included in searchResult)
}
