import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import AppBar from "./Components/Appbar";
import Formular from "./Components/Formular";

function App() {
  return (
    <div className="App">
      <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} />
      <AppBar />
      <div className="Formular">
        <Formular />
      </div>
    </div>
  );
}

export default App;
