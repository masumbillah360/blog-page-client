import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import "react-photo-view/dist/react-photo-view.css";

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
