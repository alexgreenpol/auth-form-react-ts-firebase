import React from "react";
import ReactDOM from "react-dom/client";
import "./data/api/firebase";
import App from "./views/app/App";
import "./views/assets/styles/styles.scss";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
