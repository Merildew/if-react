import React from "react";
import "./styles/homes.css";
import "./styles/top-section.sass"
import Homes from "./components/Homes";
import TopSection from "./components/TopSection";


function App() {
  return (
    <div className="wrapper">
        <TopSection/>
        <Homes />
    </div>
  );
}
export default App;
