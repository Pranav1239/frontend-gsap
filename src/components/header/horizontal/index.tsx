import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";

const anim = {
  initial: {
    opacity: 0,
  },
  open: (delay: any) => ({
    opacity: 1,
    transition: { duration: 0.3, delay: 0.02 * delay[0] }, // Slight delay for stagger effect
  }),
  closed: (delay: any) => ({
    opacity: 0,
    transition: { duration: 0.3, delay: 0.02 * delay[1] }, // Slight delay for stagger effect
  }),
};

export default function Index({ menuIsActive }: { menuIsActive: any }) {
  /**
   * Shuffles array in place (Fisher–Yates shuffle).
   * @param {Array} a items An array containing the items.
   */
  const shuffle = (a: any) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };

  const getBlocks = (indexOfColumn: any) => {
    const { innerWidth, innerHeight } = window;
    const blockSize = innerWidth * 0.05; // Each block is 5% of the screen width
    const nbOfBlocks = Math.ceil(innerHeight / blockSize); // Calculate how many blocks fit vertically
    const shuffledIndexes = shuffle([...Array(nbOfBlocks)].map((_, i) => i));

    return shuffledIndexes.map((randomIndex: any, index: any) => {
      return (
        <motion.div
          key={index}
          className={styles.block}
          variants={anim}
          initial="initial"
          animate={menuIsActive ? "open" : "closed"}
          custom={[indexOfColumn + randomIndex, 20 - indexOfColumn + randomIndex]}
        />
      );
    });
  };

  return (
    <div className={styles.pixelBackground}>
      {[...Array(20)].map((_, index) => {
        return (
          <div key={index} className={styles.column}>
            {getBlocks(index)}
          </div>
        );
      })}
    </div>
  );
}
