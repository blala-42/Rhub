import './css/app.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Root from "./pages/root";
import ErrorPage from './pages/error-page';
import Index from "./pages/index";
import ProductsList from './pages/products-list';
import ProductDetail from './pages/Product-detail';
import ProductCreate from './pages/product-create';
import Review from './pages/review';
import ReviewCreate from './pages/review-create';
import ReviewEdit from './pages/review-edit';
import User from './pages/user';
import Login from './pages/login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "/product/list",
            element: <ProductsList />,
          },
          {
            path: "/product/detail",
            element: <ProductDetail />,
          },
          {
            path: "/product/create",
            element: <ProductCreate />,
          },
          {
            path: "/review",
            element: <Review />,
          },
          {
            path: "/review/create",
            element: <ReviewCreate />,
          },
          {
            path: "/review/edit",
            element: <ReviewEdit />,
          },
          {
            path: "/user",
            element: <User />,
          },
          {
            path: "/login",
            element: <Login />,
          },
        ]
      },
    ]
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
