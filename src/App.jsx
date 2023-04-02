import "./App.css";
import Chart from "./components/Chart/Chart";
import FoodList from "./components/FoodList/FoodList";
import Navbar from "./components/Navbar/Navbar";
import { FaceSmileIcon } from "@heroicons/react/24/solid";


function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <FoodList></FoodList>

      <h1 className="flex items-center justify-center gap-3 bg-orange-300 font-semibold text-4xl p-4 my-8">
        Happy Coding !
        <FaceSmileIcon className="h-10 w-10 text-white" />
      </h1>

      <Chart></Chart>
    </div>
  );
}

export default App;
