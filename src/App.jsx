// components
import Graph from "./Components/Graph";
import Nav from "./Components/Nav";
import RightBar from "./Components/RightBar";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="main">
        <Nav />
        <div className="data">
          <Graph />
          <RightBar />
        </div>
      </div>
    </div>
  );
}

export default App;
