import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
if (process.env.NODE_ENV !== "production") {
  await import("./styles/globals.css");
} else {
  await import("./styles/build.css");
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
