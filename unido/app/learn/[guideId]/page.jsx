
"use client";

import { useParams } from "next/navigation";
import React from "react";
import { useGuides } from "../../context/BrewGuidesContext";
import styles from "../../styles/aboutus.module.scss";

const GuidePage = () => {
  const params = useParams();
  const { guideId } = params;
  const { guides } = useGuides();



  const guide = guides.find((guide) => guide.id === parseInt(guideId));



  return (
    <div className={styles.guide_page}>
      <div className={styles.guideTitle}>{guide.id}</div>
      <div className={styles.guideTitle}>{guide.title}</div>
      <div className={styles.guideTitle}>{guide.description}</div>
    </div>
  );
};

export default GuidePage;
