export enum VISIBILITY_FILTER {
  SHOW_UPCOMING = 'SHOW_UPCOMING',
  SHOW_PAST = 'SHOW_PAST'
}

export interface TalkFilter {
  label: string;
  value: VISIBILITY_FILTER;
}

export const talkFilters: TalkFilter[] = [
  { label: 'Upcoming', value: VISIBILITY_FILTER.SHOW_UPCOMING },
  { label: 'Past', value: VISIBILITY_FILTER.SHOW_PAST },
];
