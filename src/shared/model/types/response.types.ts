export type ResponseProps = {
  poster?: { url: string };
  description: string;
  movieLength: number;
  id: number;
  name: string;
  rating: { kp: number };
  year: number;
  genres: { name: string }[];
};
