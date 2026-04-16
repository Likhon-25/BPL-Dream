import { Suspense } from "react";
import "./App.css";
import Banner from "./components/homepage/banner/Banner";
import Players from "./components/homepage/players/Players";
import Navbar from "./components/navbar/Navbar";

const fetchPlayer = async() =>{
  const res = await fetch("/data.json")
  return res;
}
function App() {
  const playersPromise = fetchPlayer();
  return (
    <div>
      <Navbar></Navbar>
      <Banner />
      <Suspense></Suspense>
      <Players playersPromise={playersPromise} />
    </div>
  );
}

export default App;
