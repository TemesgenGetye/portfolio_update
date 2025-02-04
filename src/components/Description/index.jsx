import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";
import Rounded from "../../common/RoundedButton";

export default function Description() {
  const phrase =
    "Hello, I'm Temesgen—a skilled full-stack developer with a passion for crafting intuitive and efficient digital solutions. With experience in completing over 10 impactful projects, I excel at transforming intricate concepts into user-friendly applications. Welcome to my portfolio, where creativity meets technical precision!";
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div ref={description} className={styles.description}>
      <div className={styles.body}>
        <p>
          {phrase.split(" ").map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
          The fusion of my creativity, technical expertise, and a deep love for
          crafting interactive experiences allows me to transform ideas into
          impactful digital solutions.
        </motion.p>
        <div data-scroll data-scroll-speed={0.1}>
          <Rounded className={styles.button}>
            <p>About me</p>
          </Rounded>
        </div>
      </div>
    </div>
  );
}
