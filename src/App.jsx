import "./App.css";
import { BiSolidFridge } from "react-icons/bi";
import ItemInput from "./components/ItemInput";
import TestButton from "./components/test";

function App() {
  return (
    <div className="bg-yellow-50 min-h-screen">
      <header className="fixed top-0 left-0 right-0  p-4 flex items-center bg-green-300">
        <h1
          className="m-4 text-4xl font-bold"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Fridge Manager
        </h1>
        <BiSolidFridge className="h-12 w-12" />
      </header>
      <ItemInput />
    </div>
  );
}

export default App;
