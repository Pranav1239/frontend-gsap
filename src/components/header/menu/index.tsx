import React from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";

const anim = {
  initial: {
    opacity: 0,
    x: "-100%" // Optional: slide in from left
  },
  open: {
    opacity: 1,
    x: "0" // Animate to normal position
  },
  closed: {
    opacity: 0,
    x: "-100%" // Slide out when closed
  }
};

export default function index({ menuIsActive }: { menuIsActive: any }) {
  return (
    <motion.div
      className={styles.menu}
      variants={anim}
      initial="initial"
      animate={menuIsActive ? "open" : "closed"}
      exit="closed"
      transition={{ duration: 0.5 }} // Optional: smooth out the transition
    >
      <p>Home</p>
      <p>About</p>
      <p>Contact</p>
    </motion.div>
  );
}
