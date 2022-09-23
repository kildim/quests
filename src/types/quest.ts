import {Genre} from './genre';

export type Level = 'hard' | 'medium' | 'easy';


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
