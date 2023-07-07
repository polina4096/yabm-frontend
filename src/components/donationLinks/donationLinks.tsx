'use client';

import styles from "./donationLinks.module.css";
import {MouseEvent} from "react";

function copyInnerText(event: MouseEvent<HTMLLIElement>) {
  const element = event.target as HTMLLIElement;
  navigator.clipboard.writeText(element.innerText.split(/\s/)[1]).then(r => {
    // success
  });
}

export default function DonationLinks({crypto}: { crypto: [string, string][] }) {
  return <ul className={styles.donate}>
    { crypto.map((address: [string, string]) =>
      <li key={address[1]} onClick={copyInnerText}>
        { address[0] }&nbsp;{ address[1] }
      </li>
    ) }
  </ul>;
}