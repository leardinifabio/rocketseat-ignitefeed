import styles from "./Feed.module.css";

export function Feed(props) {
  return (
    <div>
      <strong>{props.author}</strong>
      <p className={styles.content}>{props.content}</p>
    </div>
  );
}
