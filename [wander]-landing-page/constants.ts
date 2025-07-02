
import { VideoItem, Themes, ThemeValue } from './types';

export const VIDEO_DATA: VideoItem[] = [
  {
    id: '1',
    title: 'Whispering Forest of Yakushima',
    thumbnailUrl: 'https://picsum.photos/seed/yakushima/600/338',
    videoClipUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    theme: Themes.NATURE,
    categoryText: 'NATURE / KYUSHU',
  },
  {
    id: '2',
    title: 'Sake Making with a Master',
    thumbnailUrl: 'https://picsum.photos/seed/sake/600/338',
    videoClipUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    theme: Themes.TRADITION,
    categoryText: 'TRADITION / TOHOKU',
  },
  {
    id: '3',
    title: 'A Chef\'s Secret Beach',
    thumbnailUrl: 'https://picsum.photos/seed/beachfood/600/338',
    videoClipUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    theme: Themes.FOOD,
    categoryText: 'FOOD / OKINAWA',
  },
  {
    id: '4',
    title: 'Ancient Temple Meditation',
    thumbnailUrl: 'https://picsum.photos/seed/temple/600/338',
    videoClipUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    theme: Themes.TRADITION,
    categoryText: 'TRADITION / KYOTO',
  },
  {
    id: '5',
    title: 'Sapporo Snow Sculptures',
    thumbnailUrl: 'https://picsum.photos/seed/snowart/600/338',
    videoClipUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    theme: Themes.ART,
    categoryText: 'ART / HOKKAIDO',
  },
  {
    id: '6',
    title: 'Hiking the Nakasendo Trail',
    thumbnailUrl: 'https://picsum.photos/seed/nakasendo/600/338',
    videoClipUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    theme: Themes.ADVENTURE,
    categoryText: 'ADVENTURE / CENTRAL JAPAN',
  },
];

export const FILTER_THEMES: ThemeValue[] = [Themes.ALL, Themes.NATURE, Themes.FOOD, Themes.TRADITION, Themes.ART, Themes.ADVENTURE];
