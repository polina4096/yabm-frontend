import Image from "next/image";
import styles from "./page.module.css";
import DonationLinks from "@/components/donationLinks/donationLinks";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.slashContainer}>
        <div className={styles.logoContainer}>
          <h1 className={styles.logo}>y</h1>
          <h1 className={styles.logo}>a</h1>
          <h1 className={styles.logo}>b</h1>
          <h1 className={styles.logo}>m</h1>

          <h1 className={`${styles.logoLayer1} ${styles.logoLayer}`}>e</h1>
          <h1 className={`${styles.logoLayer1} ${styles.logoLayer}`}>n</h1>
          <h1 className={`${styles.logoLayer1} ${styles.logoLayer}`}>e</h1>
          <h1 className={`${styles.logoLayer1} ${styles.logoLayer}`}>i</h1>

          <h1 className={`${styles.logoLayer2} ${styles.logoLayer}`}>t</h1>
          <h1 className={`${styles.logoLayer2} ${styles.logoLayer}`}>o</h1>
          <h1 className={`${styles.logoLayer2} ${styles.logoLayer}`}>a</h1>
          <h1 className={`${styles.logoLayer2} ${styles.logoLayer}`}>r</h1>

          <h1 className={`${styles.logoLayer3} ${styles.logoLayer}`}></h1>
          <h1 className={`${styles.logoLayer3} ${styles.logoLayer}`}>t</h1>
          <h1 className={`${styles.logoLayer3} ${styles.logoLayer}`}>t</h1>
          <h1 className={`${styles.logoLayer3} ${styles.logoLayer}`}>r</h1>

          <h1 className={`${styles.logoLayer4} ${styles.logoLayer}`}></h1>
          <h1 className={`${styles.logoLayer4} ${styles.logoLayer}`}>h</h1>
          <h1 className={`${styles.logoLayer4} ${styles.logoLayer}`}>m</h1>
          <h1 className={`${styles.logoLayer4} ${styles.logoLayer}`}>o</h1>

          <h1 className={`${styles.logoLayer5} ${styles.logoLayer}`}></h1>
          <h1 className={`${styles.logoLayer5} ${styles.logoLayer}`}>e</h1>
          <h1 className={`${styles.logoLayer5} ${styles.logoLayer}`}>a</h1>
          <h1 className={`${styles.logoLayer5} ${styles.logoLayer}`}>r</h1>

          <h1 className={`${styles.logoLayer6} ${styles.logoLayer}`}></h1>
          <h1 className={`${styles.logoLayer6} ${styles.logoLayer}`}>r</h1>
          <h1 className={`${styles.logoLayer6} ${styles.logoLayer}`}>p</h1>
          <h1 className={`${styles.logoLayer6} ${styles.logoLayer}`}></h1>
        </div>
        <div className={styles.splashContent}>
          <p>
            yet another beatmap hosting.
          </p>
          <br />
          <p>
            alternative beatmap repository, fully open-source and free forever.
          </p>
          <br />
          <p>
            built with web technologies: TypeScript, React, Next.js; Nest.js on the backend and lots of love &lt;3
          </p>
          <br />
          <p>
            please consider donating to support continued operation of this instance, as it requires a certain amount of money to keep it running every month:
          </p>
          <DonationLinks crypto={[
            ['BTC', 'bc1pmsc2xkgnu2aqhsyln2rg4aznmycfsmxt52t6xz4tcw4067csmu6qzd5tmr'],
            ['ETH', '0x783C6a9fa14206A3E8ca6c22e3EEE82d54255069'],
            ['XMR', '486wWReWHVk3gbGVeAGeko9kbtHieVWXPJP9ZA2M3FGz3cSBiQ5xzpxPCUxqeSkorAjF2526JvZkD3qjkD3ZkUG8M6DKJgQ'],
            ['TON', 'EQCfeNUYnMYgu4ZSz_Jzi_B0y0-Z9yOKztPL3KT1VYP8w1cw'],
          ]} />
        </div>
      </div>
    </div>
  );
}
