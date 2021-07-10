import router from "next/router";
import React from "react";
import styles from "./component.module.css";
const nextpage = () => {
  return (
    <div className={styles.main}>
      <h2>I'm Second Page</h2>
      <button onClick={() => router.push("/scsspage")}>
        Tak To me the SCSS Page
      </button>
    </div>
  );
};

export default nextpage;
