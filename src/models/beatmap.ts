import { Difficulty } from "@/models/difficulty";

export interface Beatmap {
  id: number;
  author: string;
  title: string;
  mapper: string;
  difficulties: Difficulty[];
}
