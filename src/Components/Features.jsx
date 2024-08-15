import brand_recognition_icon from "../images/icon-brand-recognition.svg";
import detailed_records_icon from "../images/icon-detailed-records.svg";
import fully_customizable_icon from "../images/icon-fully-customizable.svg";

import styles from "./Features.module.css";

function Features() {
  const featuresList = [
    {
      iconSource: brand_recognition_icon,
      title: "Brand Recognition",
      featureOrder: "first",
      details:
        "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
    },
    {
      iconSource: detailed_records_icon,
      title: "Detailed Records",
      featureOrder: "second",
      details:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
      iconSource: fully_customizable_icon,
      title: "Fully Customizable",
      featureOrder: "third",
      details:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
  ];


  return (
    <section className={`bgLight ${styles.sectionPadding}`}>
      <div className="container">
        <div className={styles.titleWrapper}>
          <h2>Advanced Statistics</h2>
          <div className="p-xs"></div>
          <p className="subtitle">
            Track how your links are performing across the web with our advanced
            statisics dashboard.
          </p>
        </div>
        <div className="p-big"></div>
        <div className="p-small"></div>
        <div className={styles.featuresGrid}>
          {featuresList.map((feature) => {
            return (
              <div key={feature.title} className={`${styles.featuresItem} ${styles[feature.featureOrder]}`}>
                <div className={styles.featuresIcon}>
                  <img src={feature.iconSource} alt={feature.title} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.details}</p>
              </div>
              
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
