export interface Rendition {
  width: string,
  height: string,
  url: string,
  size?: string,
  frames?: string,
  hash?: string
  mp4?: string
}

export interface Image {
  id: string,
  images: {
    downsized: Rendition,
    downsized_still: Rendition,
    original: Rendition,
    original_still: Rendition,
    preview: Rendition,
    looping: Rendition,
    // catch-all for other sizes
    [key: string]: Rendition
  }
}

export interface Gif {
  images: Image[],
  id: string
}

export interface Action {
  type: string,
  payload?: any
}