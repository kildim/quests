import {Genre} from './genre';
import {Level} from './level';

export type Quest = {
  id: number,
  title: string,
  description: string,
  previewImg: string,
  coverImg: string,
  type: Genre,
  level: Level,
  peopleCount: [number, number],
  duration: number,
}
