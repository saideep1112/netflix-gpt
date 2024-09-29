import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter}>
        <div className="App">Hello</div>
      </RouterProvider>
    </Provider>
  );
}

export default App;
