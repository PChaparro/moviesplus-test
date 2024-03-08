export type Category = {
  id: string;
  name: string;
  thumbnail: string;
};

export type Movie = {
  id: number;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
  genres: {
    id: number;
    name: string;
  }[];
};

export type SessionUser = {
  id: string;
  username: string;
  picture: string;
};
