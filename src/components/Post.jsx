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
    event.target.setCustomValidity("")
    setnewComment(event.target.value)
  }

  function deleteComment(commentToDelete) {
    // Imutabilidade -> Variaveis não sofrem mutação, e sim, criamos um novo valor (um novo espaço na memoria)
    const commentsWithotDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })
    setComments(commentsWithotDeletedOne)
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity("Campo obrigatório")
  }

  return (
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
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === "link") {
            return <p key={line.content}><a href="#">{line.content}</a></p>
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
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={newComment.length === 0}>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comments key={comment} content={comment} onDeleteComment={deleteComment} />
        })}
      </div>
      
    </article>
  )
}