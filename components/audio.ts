import { Howl, Howler } from 'howler'

export const AUDIOS = {
  LANDING_PAGE_BACKGROUND: new Howl({ src: ['/audio/soundtrack-hawken.mp3'], loop: true, volume: 0.5 }),
  MOUSE_HOVER: new Howl({ src: ['/audio/sfx-hover.mp3'], volume: 2 }),
}
