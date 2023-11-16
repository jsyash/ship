import React from "react";
import ReactDOMClient from "react-dom/client";
import { CreatedByHtmlTo } from "./screens/CreatedByHtmlTo";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<CreatedByHtmlTo />);
