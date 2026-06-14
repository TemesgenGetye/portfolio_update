"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./style.module.scss";
import Image from "next/image";

const slider1 = [
  {
    color: "#e3e5e7",
    src: "888.png",
  },
  {
    color: "#d6d7dc",
    src: "emawa.png",
  },
  {
    color: "#e3e3e3",
    src: "eth.png",
  },
  {
    color: "#21242b",
    src: "selam.png",
  },
];

const slider2 = [
  {
    color: "#1E3A8A",
    src: "beacon.png",
  },
  {
    color: "#8B0000",
    src: "emawa.png",
  },
  {
    color: "#D6EFFF",
    src: "eth.png",
  },
  {
    color: "#C084FC",
    src: "selam.png",
  },
];

export default function SlidingImages() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div ref={container} className={styles.slidingImages}>
      <motion.div style={{ x: x1 }} className={styles.slider}>
        {slider1.map((project, index) => (
          <div
            key={index}
            className={styles.project}
            style={{ backgroundColor: project.color }}
          >
            <div className={styles.imageContainer}>
              <Image fill={true} alt={"image"} src={`/images/${project.src}`} />
            </div>
          </div>
        ))}
      </motion.div>
      <motion.div style={{ x: x2 }} className={styles.slider}>
        {slider2.map((project, index) => (
          <div
            key={index}
            className={styles.project}
            style={{ backgroundColor: project.color }}
          >
            <div className={styles.imageContainer}>
              <Image
                alt={"image"}
                src={`/images/${project.src}`}
                objectFit="contain"
                fill={true}
              />
            </div>
          </div>
        ))}
      </motion.div>
      <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
    </div>
  );
}
