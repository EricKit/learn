import { Component } from 'solid-js';
import styles from './navbar.module.css';
import { A } from '@solidjs/router';

const Navbar: Component = () => {
  return (
    <nav>
      <ul class={styles.navbar}>
        <li class={styles.item}>
          <A href="/solid" class={styles.link} activeClass={styles.active}>
            Home
          </A>
        </li>
        <li class={styles.item}>
          <A href="/anotherpage" class={styles.link} activeClass={styles.active}>
            Another Page
          </A>
        </li>
        <li class={styles.item}>
          <a href="/index.html" class={styles.link}>
            Old Site
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
