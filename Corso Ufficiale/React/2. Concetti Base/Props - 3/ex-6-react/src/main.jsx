import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(<App />);

//Passa al componente Age la prop age che Welcome sta ricevendo dal componente App.
