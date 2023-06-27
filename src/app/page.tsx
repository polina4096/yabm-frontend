import styles from "./page.module.css";
import React from "react";
import Search from "@/components/search";
import BeatmapCard from "@/components/beatmapCard";
import { Beatmap } from "@/models/beatmap";
import _ from "lodash";

export default async function Home() {
  const beatmaps: Beatmap[] = await fetch("http://localhost:3001/beatmaps", {
    cache: "no-store",
  }).then((e) => {
    return e.json().then((e) => {
      return e.items.map((beatmap: Beatmap) => {
        beatmap.difficulties = _.sortBy(
          beatmap.difficulties,
          (difficulty) => difficulty.starRating
        );
        return beatmap;
      });
    });
  });

  const searchHint: string = await fetch(
    "http://localhost:3001/beatmaps/hint",
    { cache: "no-store" }
  ).then((e) => {
    return e.text();
  });

  return (
    <>
      <div className={styles.headerContainer}>
        <h1>yet another beatmap mirror</h1>
        <p className={styles.headerDetail}>
          just like one out of the others already there, nothing special
        </p>
        <Search placeholder={searchHint} />
        <p className={styles.headerHint}>
          try searching for your favorite beatmap
        </p>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.cardContainer}>
          {beatmaps.map((beatmap) => (
            <BeatmapCard key={beatmap.id} beatmap={beatmap} />
          ))}
        </div>
      </div>
    </>
  );
}
