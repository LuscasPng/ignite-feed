import styles from "./Post.module.css"

export function Post() {
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://media.licdn.com/dms/image/D4D03AQFfqsT3fbahiA/profile-displayphoto-shrink_100_100/0/1720493911674?e=1726099200&v=beta&t=A_gkTXXsgw9tcIAoUmFANm_eEa3TwuHhcKmfzARpMx0" />
          <div className={styles.authorInfo}>
            <strong>Lucas Ferreira</strong>
            <span>Developer</span>
          </div>
        </div>
        <time dateTime="2024-07-13 12:56:00" title="13 de Julho às 12:56">Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><a href="">jane.design/doctorcare</a></p>
        <p>
          <a href="">#novoprojeto</a>{" "}
          <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder="Deixe um comentário"
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  )
}