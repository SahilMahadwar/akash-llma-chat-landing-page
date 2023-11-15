import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./fonts.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-[#020103] text-white font-sans">
      <App />
    </div>
  </React.StrictMode>
);
