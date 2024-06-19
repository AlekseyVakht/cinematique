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

export interface Page {
  docs: ResponseProps[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}
