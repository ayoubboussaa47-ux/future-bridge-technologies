import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root") as HTMLDivElement;
if (container) {
  createRoot(container).render(<App />);
} else {
  console.error("Root container not found");
}