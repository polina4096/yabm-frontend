"use client";

import styles from "@/components/difficulty.module.css";
import icons from "@/app/icons.module.css";
import { Tooltip } from "react-tooltip";

export default function Difficulty({
  name,
  starRating,
  beatmapId,
  difficultyId,
}: {
  name: string;
  starRating: number;
  beatmapId: number;
  difficultyId: number;
}) {
  const uid = `b${beatmapId}-${difficultyId}`;

  return (
    <>
      <div
        style={{ backgroundPositionX: `${starRating * 10}%` }}
        id={uid}
        className={styles.difficulty}
      />
      <Tooltip anchorSelect={`#${uid}`} place="top">
        <div className={styles.tooltipContentContainer}>
          <div className={styles.tooltipContent}>
            <div className={icons.star} />
            {starRating}
          </div>
          <div>{name}</div>
        </div>
      </Tooltip>
    </>
  );
}
