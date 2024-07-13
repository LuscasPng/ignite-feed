import { Header } from "./components/Header";
import "./global.css"
import { Post } from "./components/Post";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            title="Post 1"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et placeat incidunt aut optio assumenda ipsa. Exercitationem, quae eum hic delectus accusamus harum, iusto, necessitatibus deleniti voluptate quidem nihil atque placeat?"
          />
          <Post 
            title="Post 2"
            content="Concordo com o cara de cima"
          />
        </main>
      </div>
    </div>
  )
}

