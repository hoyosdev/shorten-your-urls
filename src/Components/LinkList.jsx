import React from "react";


function LinkList({loading, urlsList}) {
  return (
        <div className="list">
          {loading && <p>Loading</p>}
          {Array.isArray(urlsList) &&
            urlsList.map((element, i) => (
              <div className="list-item" key={i}>
                <p className="truncate">{element.longUrl}</p>
                <div className="list-flex">
                  <p className="fc-cyan">{element.shortUrl}</p>
                  <button className="btn-primary btn-square btn-copied">
                    Copy Link
                  </button>
                </div>
              </div>
            ))}
        </div>

  );
}

export default LinkList;
