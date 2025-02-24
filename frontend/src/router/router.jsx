import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/books/CartPage";
import CheckoutPage from "../pages/books/CheckoutPage";
import SingleBook from "../pages/books/SingleBook";
import PrivateRoute from "./PrivateRoute";
import OrderPage from "../pages/books/OrderPage";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import ManageBooks from "../pages/dashboard/ManageBooks/ManageBooks";
import AddBook from "../pages/dashboard/addBook/AddBook";
import UpDateBook from "../pages/dashboard/EditBook/UpDateBook";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [{
            path: "/",
            element: <Home />
        },
        {
            path: "/About",
            element: <div>About</div>
        },
        {

            path: "/orders",
            element: <OrderPage />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/register",
            element: <Register />
        },
        {
            path: "/cart",
            element: <CartPage />
        },
        {
            path: "/checkout",
            element: <PrivateRoute><CheckoutPage /></PrivateRoute>
        },
        {
            path: "/books/:id",
            element: <SingleBook />
        }
        ]
    },
    {
        path: '/admin',
        element: <AdminLogin />
    },
    {
        path: '/dashboard',
        element: <DashboardLayout/>,
        children: [
            {
                path: '',
                element: <AdminRoute><Dashboard/></AdminRoute>
            },
            {
                path: 'add-new-book',
                element: <AdminRoute><AddBook/></AdminRoute>
            },
            {
                path: 'edit-book/:id',
                element: <AdminRoute><UpDateBook/></AdminRoute>
            },
            {
                path: 'manage-books',
                element: <AdminRoute><ManageBooks/></AdminRoute>
            }
        ]
    }
])

export default router;