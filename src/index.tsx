import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./view/Home/Home";
import "./styles.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {AppShell} from "./components/AppShell/AppShell";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
]);

root.render(
    <React.StrictMode>
        <AppShell>
            <RouterProvider router={router}/>
        </AppShell>
    </React.StrictMode>
);
