import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Main from "./components/pages/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
  },
  {
    path: "/daddy",
    element: <div>Hello daddy</div>,
  }
]);

function App() {
  return (<RouterProvider router={router} />)
}

export default App
