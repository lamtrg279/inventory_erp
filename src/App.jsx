import "./App.css";
import { BiSolidFridge } from "react-icons/bi";
import ItemForm from "./components/ItemForm";

function App() {
  return (
    <div className="bg-blue-50 min-h-screen">
      <header className="fixed top-0 left-0 right-0  p-4 flex items-center bg-green-400 shadow-md gap-4 z-10">
        <h1
          className="m-4 text-4xl font-bold text-yellow-100 sm:text-3xl"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          FRESHSTOCK
        </h1>
        <BiSolidFridge className="h-12 w-12" />
      </header>
      <ItemForm />
    </div>
  );
}

export default App;
