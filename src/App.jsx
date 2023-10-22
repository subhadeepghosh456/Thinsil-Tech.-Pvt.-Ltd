import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import MainContainer from "./components/MainContainer";
import Register from "./components/Register";
import Login from "./components/Login";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainContainer />,
      children: [
        {
          path: "/",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/details",
          element: <ProductDetails />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  );
}

export default App;
