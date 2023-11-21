type Collection = {
  id: string;
  slug: string;
  body: string;
};

export type ProjectCollection = (Collection & {
  collection: 'project';
  data: {
    thumbnail: {
      src: string;
      width: number;
      height: number;
    };
    title: string;
    description: string;
    category: string;
    tags: string[];
    date: Date;
  };
})[];

export type StoryCollection = (Collection & {
  collection: 'story';
  data: {
    thumbnail: {
      src: string;
      width: number;
      height: number;
    };
    title: string;
    summary: string;
    category: string;
    tags: string[];
    date: Date;
  };
})[];
