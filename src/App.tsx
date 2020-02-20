import React from "react";
import SortingVisualizer from "./components/SortingVisualizer/SortingVisualizer";
import "./App.css";

const App: React.FC = props => {
  return (
    <div className="App">
      <SortingVisualizer></SortingVisualizer>
    </div>
  );
};

export default App;
