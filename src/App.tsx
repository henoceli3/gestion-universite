import { notification } from "antd";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./router/router";
function App() {
  notification.config({
    placement: "bottomRight",
    duration: 3,
  });

  return <RouterProvider router={appRouter} />;
}

export default App;
