import "./App.css";
import FoodList from "./components/FoodList/FoodList";
import Navbar from "./components/Navbar/Navbar";
import { FaceSmileIcon } from "@heroicons/react/24/solid";


function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className="flex items-center justify-center gap-3 bg-orange-300 font-semibold text-4xl p-4 my-8">
        Happy Coding !
        <FaceSmileIcon className="h-10 w-10 text-white" />
      </h1>

      <FoodList></FoodList>
    </div>
  );
}

export default App;
