import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#00b96b" } }}>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
