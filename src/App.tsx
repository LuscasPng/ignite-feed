import { Header } from "./components/Header";
import "./global.css"
import { Post } from "./components/Post";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://media.licdn.com/dms/image/D4D03AQFfqsT3fbahiA/profile-displayphoto-shrink_100_100/0/1720493911674?e=1726099200&v=beta&t=A_gkTXXsgw9tcIAoUmFANm_eEa3TwuHhcKmfzARpMx0",
      name: "Lucas Ferreira",
      role: "Web Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋"},
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      { type: "link", content: "jane.design/doctorcare"} 
    ],
    publishedAt: new Date("2024-07-13 11:10:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://media.licdn.com/dms/image/D4D03AQERaiAoS7zsDw/profile-displayphoto-shrink_200_200/0/1720480187926?e=1726704000&v=beta&t=fBRmfoNNdMhi-HZ9VT9CkKZnKOMjVruxksA1_AbTZd4",
      name: "Micaelly Teressani",
      role: "Design"
    },
    content: [
      { type: "paragraph", content: "Fala pessoal 👋"},
      { type: "paragraph", content: "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻"},
      { type: "paragraph", content: "Acesse e deixe seu feedback 👉"},
      { type: "link", content: "devonlane.design"} 
    ],
    publishedAt: new Date("2024-07-14 12:43:00")
  },
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />  
            )
          })}
        </main>
      </div>
    </div>
  )
}

