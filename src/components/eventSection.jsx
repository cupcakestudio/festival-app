import styles from "@/styles/Home.module.css";
import Link from 'next/link';
import LandingButton from "./landingButton";

export function EventSection(){
    return(
      <div className={styles.eventContainer}>
        <h2 className="fadeIn">THIS WEEKS EVENTS</h2>
        <Link href='/events'>
          <LandingButton className={styles.eventKnap}> SHOW ME</LandingButton>
        </Link>
      </div>
    );
  }