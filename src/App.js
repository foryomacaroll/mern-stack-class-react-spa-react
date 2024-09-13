import "./App.css";
import Image from "./assets/imgimg.png";

function App() {
  let name = "Hlaing Min Than";
  return (
    <div>
      <h1>Hello {name}</h1>
      {/* first way */}
      {/* <img src="/imgimg.png" alt=""></img> */}
      {/* second way */}
      <img src={Image}></img>
    </div>
  );
}

export default App;
