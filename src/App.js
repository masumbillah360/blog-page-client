import { Toaster } from "react-hot-toast";
import "react-photo-view/dist/react-photo-view.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </>
  );
}

export default App;
