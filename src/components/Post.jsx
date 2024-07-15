import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { Avatar } from "./Avatar"
import { Comments } from "./Comments"
import styles from "./Post.module.css"
import { useState } from "react";

export function Post(props) {
  const [comments, setComments] = useState([
    "Parabéns!!!"
  ])

  const [newComment, setnewComment] = useState("")

  const publishedDateFormatted = format(props.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment() {
    event.preventDefault()

    console.log(event.target.comment.value)
    const commentText = event.target.comment.value

    setComments([...comments, commentText])
    setnewComment("")
  }

  function handleNewComment() {
    setnewComment(event.target.value)
  }

  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={props.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
          </div>
        </div>
        <time dateTime={props.publishedAt.toISOString()} title={publishedDateFormatted}>{publishedDateRelativeToNow}</time>
      </header>
      <div className={styles.content}>
        {props.content.map(line => {
          if(line.type === "paragraph") {
            return <p>{line.content}</p>
          } else if(line.type === "link") {
            return <a href="#">{line.content}</a>
          }
        })}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          name="comment"
          placeholder="Deixe um comentário"
          value={newComment}
          onChange={handleNewComment}
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comments content={comment} />
        })}
      </div>
    </article>
  )
}