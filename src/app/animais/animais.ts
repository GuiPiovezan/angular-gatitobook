export interface Animal {
  id: number;
  postDate: Date;
  url: string;
  description: string;
  allowComments: boolean;
  like: number;
  comments: number;
  userId: number;
}

export type Animais = Array<Animal>;
