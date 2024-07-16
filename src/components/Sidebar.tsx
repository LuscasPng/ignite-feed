import { PencilSimpleLine } from "phosphor-react";
import styles from "./Sidebar.module.css";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return(
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?w=500&auto=format&fit=crop&q=50&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFyayUyMGJsdWV8ZW58MHx8MHx8fDA%3D" alt="" />
      <div className={styles.profile}>
        <Avatar src="https://media.licdn.com/dms/image/D4D03AQFfqsT3fbahiA/profile-displayphoto-shrink_100_100/0/1720493911674?e=1726099200&v=beta&t=A_gkTXXsgw9tcIAoUmFANm_eEa3TwuHhcKmfzARpMx0" />
        <strong>Lucas Ferreira</strong>
        <span>Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilSimpleLine size={20} />
          Editar perfil
        </a>
      </footer>
    </aside>
  )
}