import { Articles } from "./articles";

export interface News {
  articles: Articles[];
  status: string;
  totalResults: number;

}