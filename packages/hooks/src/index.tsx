import { createRoot } from "react-dom/client";
import Home from "./pages/Home/Home";
import "./styles.css";

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<Home />);

if (module.hot) module.hot.accept();
