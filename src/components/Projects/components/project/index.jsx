"use client";
import React from "react";
import styles from "./style.module.scss";

export default function ProjectItem({ index, href, title, desc, manageModal }) {
  return (
    <div
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      onClick={() => {
        window.location.href = href;
      }}
      className={styles.project}
    >
      <div className={styles.projectContent}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{desc}</p>
      </div>
      <p className={styles.thep}>Design & Development</p>
    </div>
  );
}
