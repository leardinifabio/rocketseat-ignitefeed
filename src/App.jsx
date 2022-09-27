import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

// Utilizando o name export para exportar uma função
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
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
