import { RouterProvider } from "react-router-dom";
import { routing } from "./routing/AppRouting";

const App = () => {
  return (
    <div>
      <RouterProvider router={routing}></RouterProvider>
    </div>
  );
};

export default App;
