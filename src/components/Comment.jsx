import { Trash, ThumbsUp } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  //Sempre que precisar atualizar uma variavel que precisa charmar ela mesmo, utilizar metodo abaixo (boa prática)
  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://media-exp1.licdn.com/dms/image/D4D03AQGlaQp9lHLS3Q/profile-displayphoto-shrink_800_800/0/1664318948602?e=1669852800&v=beta&t=pgaSVYuQY3UX4TcsZOjA5yusq5ptRWjXM8uT1IjOjSc"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rafael Ferreira</strong>
              <time
                title="01 de Outubro às 08:00h"
                dateTime="2022-10-01 08:00:00"
              >
                Cerca de 2h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
