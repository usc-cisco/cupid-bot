export interface TenorApiResponse {
  results: GifResult[];
}

export interface GifResult {
  id: string;
  title: string;
  media_formats: MediaFormats;
  created: number;
  content_description: string;
  itemurl: string;
  url: string;
  tags: string[];
  flags: string[];
  hasaudio: boolean;
  content_description_source: string;
}

export interface MediaFormats {
  tinymp4?: MediaFormat;
  tinygifpreview?: MediaFormat;
  mp4?: MediaFormat;
  webp?: MediaFormat;
  nanogif?: MediaFormat;
  mediumgif?: MediaFormat;
  tinywebm?: MediaFormat;
  gifpreview?: MediaFormat;
  gif?: MediaFormat;
  nanomp4?: MediaFormat;
  nanogifpreview?: MediaFormat;
  webm?: MediaFormat;
  nanowebm?: MediaFormat;
  tinygif?: MediaFormat;
  loopedmp4?: MediaFormat;
}

export interface MediaFormat {
  url: string;
  duration: number;
  preview: string;
  dims: [number, number]; // [width, height]
  size: number;
}
