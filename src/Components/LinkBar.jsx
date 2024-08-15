import React, { useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import useAxios from "../hooks/UseAxios";
import styles from "./LinkBar.module.css"
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
    if (response && longUrl) {
      setUrlsList([
        ...urlsList,
        {
          longUrl: longUrl,
          shortUrl: response,
        },
      ]);
    }
    setLongUrl("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response, error]);

  return (
    <section  className="bgLight">
      <div className="container relative">
        <div className={styles.inputWrapper}>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Shorten a link here..."
              type="text"
              className={styles.input}
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
              <p className={styles.input}>Please add a link</p>
            </em>
          )}
        </div>
        <LinkList loading={loading} urlsList={urlsList} />
      </div>
    </section>
  );
}

export default LinkBar;
