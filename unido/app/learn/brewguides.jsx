import styles from "../styles/aboutus.module.scss";
import React from "react";
import classNames from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";
import GuideCard from "../components/GuideCard";
export default function BrewGuides({ guides }) {
  return (
    <section id={styles.brewguidesPart}>
      <div className={styles.container}>
        <div className={styles.pageGuidesTitle}>
          <h1>Brew Guides</h1>
        </div>
        <div className={classNames("row", styles.guideRow)}>
          {guides.map((guide) => {
            return (
              <div
                className={classNames("col-12 col-md-6 col-lg-6", styles.col)}
                key={guide.id}
              >
                <GuideCard guide={guide} />
              </div>
            );
          })}
        </div>
      </div>
      <hr />
    </section>

  );
}
