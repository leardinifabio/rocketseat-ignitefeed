import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Feed } from "./components/Feed/Feed";

// Utilizando o name export para exportar uma função
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Feed
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facere pariatur dicta commodi, illum recusandae consequuntur rem ex veritatis sint inventore expedita sit et optio modi deserunt! Magnam, illum laborum?"
          />
          <Feed
            author="Rafael Ferreira"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facere pariatur dicta commodi, illum recusandae consequuntur rem ex veritatis sint inventore expedita sit et optio modi deserunt! Magnam, illum laborum?"
          />
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
