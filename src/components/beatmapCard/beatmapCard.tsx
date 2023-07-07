import styles from "@/components/beatmapCard/beatmapCard.module.css";
import React from "react";
import Difficulty from "@/components/difficulty/difficulty";
import { Beatmap } from "@/models/beatmap";

export default function BeatmapCard({ beatmap }: { beatmap: Beatmap }) {
  return (
    <a className={styles.cardContainer} href={`/download/${beatmap.id}`}>
      <div className={styles.card}>
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
        <img className={styles.cardPreview} src={`/preview/${beatmap.id}`} />
        <h1 className={styles.cardTitle}>{beatmap.author}</h1>
        <p className={styles.cardDetails}>{beatmap.title}</p>
        <div className={styles.cardDifficulties}>
          {beatmap.difficulties.map((diff) => (
            <Difficulty
              key={diff.name}
              name={diff.name}
              starRating={diff.starRating}
              beatmapId={beatmap.id}
              difficultyId={diff.id}
            />
          ))}
        </div>
        <p className={styles.cardSubDetails}>
          <span className={styles.cardSubDetailsDark}>by</span> {beatmap.mapper}
        </p>
      </div>
    </a>
  );
}
