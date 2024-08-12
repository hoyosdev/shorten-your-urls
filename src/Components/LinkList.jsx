import React from "react";

function LinkList({ loading, urlsList }) {
  function copyShortLink(e) {
    const copyText = e.target.value;
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); // For mobile devices
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
    <div className="list">
      {loading && <p>Loading</p>}
      {Array.isArray(urlsList) &&
        urlsList.map((element, i) => (
          <div className="list-item" key={i}>
            <p className="truncate">{element.longUrl}</p>
            <div className="list-flex">
              <p className="fc-cyan">{element.shortUrl}</p>
              <button
                className="btn-primary btn-square"
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
