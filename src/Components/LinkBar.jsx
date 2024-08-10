import React, { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import useAxios from "./UseAxios";
import LinkList from "./LinkList";

function LinkBar() {
  const [urlsList, setUrlsList] = useLocalStorage("storage", []);
  const [longUrl, setLongUrl] = useState("");
  const { response, error, operation, loading } = useAxios();

  const handleSubmit = (e) => {
    e.preventDefault();
    operation({
      method: "POST",
      params: {
        url: longUrl,
      },
    });
  };

  useEffect(() => {
    if (response) {
      setUrlsList([
        ...urlsList,
        {
          longUrl: longUrl,
          shortUrl: response,
        },
      ]);
    }
    //localStorage.clear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response, error]);

  return (
    <div className="bg-light">
      <div className="container relative">
        <div className="link-bar-wrapper">
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Shorten a link here..."
              type="text"
              className="link-bar-input"
              name="urlstring"
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              required 
            />
            <button type="submit" className="btn-primary btn-square">
              Shorten it!
            </button>
          </form>
          {error && (
            <em>
              <p className="input-error">Please add a link</p>
            </em>
          )}
        </div>
        <LinkList loading={loading} urlsList={urlsList} />
      </div>
    </div>
  );
}

export default LinkBar;
