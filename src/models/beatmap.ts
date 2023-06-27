import { Difficulty } from "@/models/difficulty";

export interface Beatmap {
  id: number;
  image: string;
  author: string;
  title: string;
  mapper: string;
  difficulties: Difficulty[];
}
