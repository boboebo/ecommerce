import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos al banquete"} />
    </div>
  );
}

export default App;
