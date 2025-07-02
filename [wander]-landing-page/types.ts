
export interface VideoItem {
  id: string;
  title: string;
  thumbnailUrl: string;
  videoClipUrl: string;
  theme: string; 
  categoryText: string; 
}

export const Themes = {
  ALL: "All",
  NATURE: "Nature",
  FOOD: "Food",
  TRADITION: "Tradition",
  ART: "Art",
  ADVENTURE: "Adventure"
} as const;

export type ThemeValue = typeof Themes[keyof typeof Themes];
