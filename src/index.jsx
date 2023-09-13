import { createRoot } from "react-dom/client";
import App from "./App";

const domNote = document.getElementById("root");
const root = createRoot(domNote);

root.render(<App />);
