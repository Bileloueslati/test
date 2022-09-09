import { createRoot } from "react-dom/client";
import App from "./app";

const container = document.getElementById("app");

if (container) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  throw new Error("You must create an element with app as id");
}
