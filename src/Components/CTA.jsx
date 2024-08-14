import React from "react";
import styles from "./CTA.module.css"

function CTA() {
 
  return (
    <section className={styles.ctaBg}>
      <div className="container">
        <div className={styles.ctaContent}>
          <h2>Boost your links today</h2>
          <div className="m-small"></div>
         <button className="btn-primary">Get started</button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
