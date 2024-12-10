import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import Body from "./components/Body";
import Booking from "./pages/Booking";
import Drivers from "./pages/Drivers";
import Notification from "./pages/Notification";
import Setting from "./pages/Setting";
import Payments from "./pages/Payments";
import Transaction from "./pages/Transaction";
import CarReport from "./pages/CarReport";
import UIComponents from "./pages/UIComponents";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/booking", element: <Booking /> },
      { path: "/drivers", element: <Drivers /> },
      { path: "/notification", element: <Notification /> },
      { path: "/setting", element: <Setting /> },
      { path: "/payments", element: <Payments /> },
      { path: "/transaction", element: <Transaction /> },
      { path: "/carreport", element: <CarReport /> },
      { path: "/uicomponents", element: <UIComponents /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

reportWebVitals();
