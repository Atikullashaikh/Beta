import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NotesSidebar from "./Notes_feature/Sidebar.jsx";

createRoot(document.getElementById("root")).render(
 
 
  <StrictMode>
    <NotesSidebar />
  </StrictMode>
   
);
