import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { Avatar } from "./Avatar"
import { Comments } from "./Comments"
import styles from "./Post.module.css"
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

export interface PostType {
  id: number;
  author: {
    name: string;
    avatarUrl: string;
    role: string;
  };
  content: {
    type: "paragraph" | "link";
    content: string;
  }[];
  publishedAt: Date;
}

interface PostProps {
  post: PostType;
}

export function Post({ post } : PostProps) {
  const [comments, setComments] = useState([
    "Parabéns!!!"
  ])

  const [newComment, setnewComment] = useState("")

  const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()

    setComments([...comments, newComment])
    setnewComment("")
  }

  function handleNewComment(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("")
    setnewComment(event.target.value)
  }
  
  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Campo obrigatório")
  }
  
  function deleteComment(commentToDelete: string) {
    // Imutabilidade -> Variaveis não sofrem mutação, e sim, criamos um novo valor (um novo espaço na memoria)
    const commentsWithotDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })
    setComments(commentsWithotDeletedOne)
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>
        <time dateTime={post.publishedAt.toISOString()} title={publishedDateFormatted}>{publishedDateRelativeToNow}</time>
      </header>
      <div className={styles.content}>
        {post.content.map(line => {
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