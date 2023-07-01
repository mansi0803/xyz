import "./Components/Style.css";
import "./header/Header.css";
import "./App.css";
import Header from "./header/Header";

import Viewer from "./Components/Viewer";

import Form from "./Form/Form";

export default function App() {
  return (
    <div className="App">
      <Header></Header>
      <Viewer></Viewer>
    
    </div>
  );
}
