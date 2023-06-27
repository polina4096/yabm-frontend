"use client";

import styles from "./page.module.css";
import React, {useEffect, useState} from "react";
import Search from "@/components/search";
import BeatmapCard from "@/components/beatmapCard";
import { Beatmap } from "@/models/beatmap";
import _ from "lodash";
import {useDebounce} from "usehooks-ts";

export default function Home() {
  const [searchHint, setSearchHint] = useState<string>('');
  const [beatmaps, setBeatmaps] = useState<Beatmap[]>([]);

  const [query, setQuery] = useState<string>("");
  const debouncedQuery = useDebounce<string>(query, 250);

  useEffect(() => {
    fetch("http://localhost:3001/beatmaps").then((e) => {
      e.json().then((e) => {
        return e.items.map((beatmap: Beatmap) => {
          beatmap.difficulties = _.sortBy(
            beatmap.difficulties,
            (difficulty) => difficulty.starRating
          );
          return beatmap;
        });
      }).then(e => setBeatmaps(e));
    });

    fetch("http://localhost:3001/beatmaps/hint").then((e) => {
      e.text().then(e => setSearchHint(e));
    });
  }, []);

  return (
    <>
      <div className={styles.headerContainer}>
        <h1>yet another beatmap mirror</h1>
        <p className={styles.headerDetail}>
          just like one out of the others already there, nothing special
        </p>
        <Search placeholder={searchHint} query={debouncedQuery} setQuery={setQuery} />
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
