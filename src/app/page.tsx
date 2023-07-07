"use client";

import styles from "./page.module.css";
import React, {useEffect, useState} from "react";
import Search from "@/components/search/search";
import BeatmapCard from "@/components/beatmapCard/beatmapCard";
import { Beatmap } from "@/models/beatmap";
import _ from "lodash";
import {useDebounce} from "usehooks-ts";

function fetchBeatmapList(listQuery: string, setBeatmaps: (_: Beatmap[]) => void, setSearchHint: (_: string) => void) {
  fetch("http://localhost:3001/beatmaps?" +
    new URLSearchParams({
      query: listQuery,
    })).then((e) => {
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
}

export default function Home() {
  const [searchHint, setSearchHint] = useState<string>('');
  const [beatmaps, setBeatmaps] = useState<Beatmap[]>([]);

  const [query, setQuery] = useState<string>("");
  const hintQuery = useDebounce<string>(query, 250);
  const listQuery = useDebounce<string>(query, 1000);

  useEffect(() => {
    fetchBeatmapList(listQuery, setBeatmaps, setSearchHint);
  }, [listQuery]);

  return (
    <>
      <div className={styles.headerContainer}>
        <h1>yet another beatmap mirror</h1>
        <p className={styles.headerDetail}>
          just like one out of the others already there, nothing special
        </p>
        <Search
          placeholder={searchHint}
          query={hintQuery}
          setQuery={setQuery}
          onSearch={query => fetchBeatmapList(query, setBeatmaps, setSearchHint)}
        />
        <p className={styles.headerHint}>
          try searching for your favorite beatmap
        </p>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.cardContainer}>
          { beatmaps.map((beatmap) => (
            <BeatmapCard key={beatmap.id} beatmap={beatmap} />
          )) }
        </div>
      </div>
    </>
  );
}
