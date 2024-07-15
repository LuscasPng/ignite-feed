import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comments.module.css";
import { Avatar } from "./Avatar";

export function Comments(props) {
  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://media.licdn.com/dms/image/D4D03AQFfqsT3fbahiA/profile-displayphoto-shrink_100_100/0/1720493911674?e=1726099200&v=beta&t=A_gkTXXsgw9tcIAoUmFANm_eEa3TwuHhcKmfzARpMx0" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas Ferreira</strong>
              <time dateTime="2024-07-13 23:56:00" title="13 de Julho às 23:56">Cerca de 3h</time>
            </div>
            <button title="Excluir comentario"><Trash size={20} /></button>
          </header>
          <p>{props.content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={24} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}