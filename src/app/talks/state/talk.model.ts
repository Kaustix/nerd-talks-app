import { ID } from '@datorama/akita';

export interface Talk {
  id: ID;
  title: string;
  presenter: string;
  description: string;
  date: Date;
}
