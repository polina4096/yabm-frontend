import React, { useEffect, useState } from "react";
import styles from "./search.module.css";
import icons from "@/app/icons.module.css";
import { Beatmap } from "@/models/beatmap";
import { useDebounce } from "usehooks-ts";
import _ from "lodash";
import { Difficulty } from "@/models/difficulty";

type Suggestion = {
  text: string;
  image: string;
  highest: number;
};

enum SearchSuggestionState {
  Mounted = 0,
  Hidden = 1,
  Loading = 2,
  Shown = 3,
}

export default function Search({ placeholder, query, setQuery }: { placeholder?: string, query: string, setQuery: (_: string) => void }) {
  const [suggestionsState, setSuggestionsState] = useState<SearchSuggestionState>(SearchSuggestionState.Mounted);
  const [suggestions, setSuggestions] = useState<Suggestion[] | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "/api/beatmaps?" +
          new URLSearchParams({
            query: query,
            limit: "8",
          }),
        {
          cache: "no-store",
        }
      ).then((e) => {
        return e.json().then((e) => {
          return e.items.map((beatmap: Beatmap) => {
            return {
              text: `${beatmap.author} – ${beatmap.title}`,
              image: beatmap.image,
              highest:
                _.maxBy(
                  beatmap.difficulties,
                  (difficulty: Difficulty) => difficulty.starRating
                )?.starRating ?? -1,
            };
          });
        });
      });

      setSuggestions(data);
      if (suggestionsState !== SearchSuggestionState.Mounted) {
        setSuggestionsState(SearchSuggestionState.Shown);
      }
    };

    fetchData().catch(console.error);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <div className={styles.searchBarContainer}>
      <input
        placeholder={placeholder}
        className={styles.searchBar}
        onChange={(e) => {
          setQuery(e.target.value);
          setSuggestionsState(SearchSuggestionState.Loading);
        }}
        onFocus={() => setSuggestionsState(SearchSuggestionState.Shown)}
        onBlur={() => setSuggestionsState(SearchSuggestionState.Hidden)}
      />
      {suggestionsState > 1 && (
        <div
          className={`
        ${styles.searchBarSuggestions}
        ${
          suggestionsState === SearchSuggestionState.Loading
            ? styles.searchBarSuggestionsLoading
            : ""
        }`}
        >
          {suggestions !== undefined &&
            suggestions.map((suggestion: Suggestion) => (
              <div
                key={suggestion.text}
                className={styles.searchBarSuggestionEntry}
              >
                <div
                  className={styles.searchBarSuggestionEntryImage}
                  style={{
                    background: `center / cover no-repeat url(${suggestion.image})`,
                  }}
                />
                <div className={styles.searchBarSuggestionEntryText}>
                  <div>{suggestion.text}</div>
                  <div className={styles.searchBarSuggestionEntryMeta}>
                    {suggestion.highest}
                    <div className={icons.star} />
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
