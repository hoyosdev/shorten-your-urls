import React from "react";
import styles from "./LinkList.module.css"

function LinkList({ loading, urlsList }) {
  function copyShortLink(e) {
    const copyText = e.target.value;
    let buttons = document.querySelector(".btn-copied");
    if (buttons !== null) {
      buttons.innerText = "Copy";
      buttons.classList.remove("btn-copied");
    }

    e.target.classList += " btn-copied";
    e.target.innerText = "Copied!";
    navigator.clipboard.writeText(copyText);
  }
  return (
    
    <div className={styles.list}>
      {loading && <p>Loading</p>}
      {Array.isArray(urlsList) &&
        urlsList.map((element, i) => (
          <div className={styles.listItem} key={i}>
            <p className={styles.listItemTruncate}>{element.longUrl}</p>
            <div className={styles.listFlex}>
              <p className="fc-cyan">{element.shortUrl}</p>
              <button
                className="btn-primary btn-square btn-small"
                type="button"
                value={element.shortUrl}
                onClick={copyShortLink}
              >
                Copy
              </button>
            </div>
          </div>
        ))}
    </div>
    
  );
}

export default LinkList;
