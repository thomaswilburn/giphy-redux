export interface Format {
  width: string,
  height: string,
  size: string,
  url: string,
  frames: string,
  hash: string
}

export interface Image {
  id: string,
  images: {
    [key: string]: Format
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