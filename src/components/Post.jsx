import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/leardinifabio.png" />
          <div className={styles.authorInfo}>
            <strong>Fabio Leardini</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="27 de Setembro às 08:00" dateTime="2022-09-27 08:00:00">
          Publicado há 1h
        </time>
      </header>
      <main className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a>
          &nbsp;<a href="">#nlw</a>
          &nbsp;<a href="">#rocketseat</a>
        </p>
      </main>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback!</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
