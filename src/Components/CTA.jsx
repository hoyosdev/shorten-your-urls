import React from "react";
import styles from "./CTA.module.css"

function CTA() {
 
  return (
    <section className={styles.ctaBg}>
      <div className="container">
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Boost your links today</h2>
          <div className="p-small"></div>
         <a href="#getUrl" className="btn-primary">Get started</a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
