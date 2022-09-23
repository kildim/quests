export type GenreRu = 'мистика' | 'приключения' | 'ужасы' | 'детектив' | 'sci-fi';
export type GenreEn = 'mystic' | 'adventures' | 'horror' | 'detective' | 'Sci-fi';
export type Level = 'hard' | 'medium' | 'easy';


export type Quest = {
  id: number,
  title: string,
  description: string,
  previewImg: string,
  coverImg: string,
  type: GenreRu | GenreEn
  level: Level,
  peopleCount: [number, number],
  duration: number,
}
