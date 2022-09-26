import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1577741314755-048d8525d31e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://media-exp1.licdn.com/dms/image/C4D03AQGnnNcbDD79Fw/profile-displayphoto-shrink_800_800/0/1644715819774?e=1669852800&v=beta&t=1uD-C6tcRKYpx6zCgcALKjXh-xr6giXcjik0oHMHB2o"
        />
        <strong>Rafael Ferreira</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Meu Perfil
        </a>
      </footer>
    </aside>
  );
}
