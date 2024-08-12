import React from "react";
import brand_recognition_icon from "../images/icon-brand-recognition.svg"
import detailed_records_icon from "../images/icon-detailed-records.svg"
import fully_customizable_icon from "../images/icon-fully-customizable.svg"
function Features() {
 const featuresList = [
  {
    iconSource: brand_recognition_icon,
    title: "Brand Recognition",
    class: "first",
    details: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
  },
  {
    iconSource: detailed_records_icon,
    title: "Detailed Records",
    class: "second",
    details: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
  },
  {
    iconSource: fully_customizable_icon,
    title: "Fully Customizable",
    class: "third",
    details: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
  },
 ]

  return (
    <section className="bg-light">
      <div className="container">
        <div className="section-title">
          <h2>Advanced Statistics</h2>
          <div className="m-small"></div>
          <p className='header-subtitle'>
            Track how your links are performing across the web with our advanced statisics dashboard.
            </p>         
        </div>
        <div className='m-big'></div>
        <div className='m-small'></div>
        <div className="features-grid">
            {featuresList.map(feature=> {
              return (<div className={`features-item ${feature.class}`}> 
             
                <div className="features-icon">
                <img src={feature.iconSource} alt={feature.title} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.details}</p>
              </div>
              )
            })
            }
        </div>

      </div>

    </section>
  );
}

export default Features;
