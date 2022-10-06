import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: ""

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/leardinifabio.png",
      name: "Fabio Leardini",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-10-01 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://media-exp1.licdn.com/dms/image/D4D03AQGlaQp9lHLS3Q/profile-displayphoto-shrink_800_800/0/1664318948602?e=1669852800&v=beta&t=pgaSVYuQY3UX4TcsZOjA5yusq5ptRWjXM8uT1IjOjSc",
      name: "Rafael Ferreira",
      role: "CTO @R&R Smart Project",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-10-03 20:00:00"),
  },
];

// Utilizando o name export para exportar uma função
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

/* 

Utilizando name export para exportar uma função:
export function App() {

Utilizando o default export para exportar uma função:
function App() {
...
export default App; 

*/
