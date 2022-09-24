import "./global.css";
import { Header } from "./components/Header/Header";

// Utilizando o name export para exportar uma função
export function App() {
  return (
    <div>
      <Header />
      <h1>Hello World!</h1>
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
