import { Component, ParentProps } from 'solid-js';
import styles from './page.module.css';

const Page: Component<ParentProps> = (props) => {
  return <div class={styles.page}>{props.children}</div>;
};

export default Page;
