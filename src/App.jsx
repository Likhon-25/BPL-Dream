import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/homepage/banner/Banner";
import Players from "./components/homepage/players/Players";
import Navbar from "./components/navbar/Navbar";

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
function App() {
  const playersPromise = fetchPlayer();
  const [coin , setCoin] = useState(50000);
  return (
    <div>
      <Navbar coin={coin}></Navbar>
      <Banner />

      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Players playersPromise={playersPromise} setCoin={setCoin} />
      </Suspense>
    </div>
  );
}

export default App;
