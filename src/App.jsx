import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import PersonalInfo from "./Components/PersonalInfo/PersonalInfo";
import { HeroUIProvider } from "@heroui/react";
import Plan from "./Components/Plan/Plan";
import Adds from "./Components/Adds/Adds";
import Summary from "./Components/Summary/Summary";
import NotFound from "./Components/NotFound/NotFound";
import Finish from "./Components/Finish/Finish";
function App() {
  let routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [{ index: true, element: <PersonalInfo /> },
        { path:"plan", element: <Plan /> },
        { path:"adds", element: <Adds /> },
        { path:"summary", element: <Summary /> },
        { path:"finish", element: <Finish /> },
        { path:"*", element: <NotFound/> }
      ],
    },
  ]);

  return (
    <>
      <HeroUIProvider>
        <RouterProvider router={routes} />
      </HeroUIProvider>
    </>
  );
}

export default App;
