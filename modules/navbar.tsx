import { Component } from 'solid-js';
import styles from './navbar.module.css';

const Navbar: Component = () => {
  return (
    <ul class={styles.navbar}>
      <li class={styles.item}>
        <a href="index.html" class={styles.link}>
          Home
        </a>
      </li>
      <li class={styles.item}>
        <a href="html-basics.html" class={styles.link}>
          HTML Basics
        </a>
      </li>
      <li class={styles.item}>
        <a href="css-basics.html" class={styles.link}>
          CSS Basics
        </a>
      </li>
      <li class={styles.item}>
        <a href="javascript-basics.html" class={styles.link}>
          JavaScript Basics
        </a>
      </li>
      <li class={styles.item}>
        <a href="file-structure.html" class={`${styles.link} ${styles.active}`}>
          File Structure
        </a>
      </li>
      <li class={styles.item}>
        <a href="developer-env.html" class={styles.link}>
          Developer Environment
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
