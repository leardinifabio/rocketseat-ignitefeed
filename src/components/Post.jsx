import styles from "./Post.module.css";

import { format, formatDistanceToNow } from "date-fns";
import ptbr from "date-fns/locale/pt-BR";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Post({ author, content, publishedAt }) {
  //Conceito de Estado (useState). Monitora a variável e sinaliza para atualizar quando sofrer alteração.
  const [comments, setComments] = useState(["Post muito bacana! 👏👏"]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptbr,
    }
  );

  const relativeDate = formatDistanceToNow(publishedAt, {
    locale: ptbr,
    addSuffix: true,
  });

  function handleCreateNewComment() {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function handleNewCommentinvalid() {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  //utilizando imutabilidade, retorna todos os comentários que forem diferente do 'commentToDelete' e cria uma nova lista; um novo valor da lista.
  function deleteComment(commentToDelete) {
    const commentsWithoutDelete = comments.filter((comment) => {
      return comment !== commentToDelete;
    });
    setComments(commentsWithoutDelete);
  }

  //Aplicando metodologia clean code. Auxilia quem for dar manutenção no código.
  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {relativeDate}
        </time>
      </header>
      <main className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a>{line.content}</a>
              </p>
            );
          }
        })}
      </main>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback!</strong>
        <textarea
          value={newCommentText}
          onChange={handleNewCommentChange}
          name="comment"
          placeholder="Deixe um comentário"
          onInvalid={handleNewCommentinvalid}
          required
        />
        <footer>
          <button disabled={isNewCommentEmpty} type="submit">
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}

// Quando é setado uma propriedade 'name' em uma textarea ou input, é possível acessar seu conteúdo através do nome dado.
