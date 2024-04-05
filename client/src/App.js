import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import { Nav } from "./components/Nav";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import ProfilePage from "./pages/ProfilePage";

function App() {
    const { currentUser } = useContext(AuthContext);

    // console.log(currentUser);

    const RequireAuthentication = ({ children }) => {
        return currentUser ? children : <Navigate to="/login"></Navigate>;
    };

    return (
        <BrowserRouter>
            <Nav></Nav>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                ></Route>
                <Route
                    path="/about"
                    element={<About />}
                ></Route>
                <Route
                    path="/products"
                    element={<Products />}
                ></Route>
                <Route
                    path="/contact"
                    element={<Contact />}
                ></Route>
                <Route
                    path="/singleproduct/:id"
                    element={<SingleProduct />}
                ></Route>
                <Route
                    path="/cart"
                    element={
                        <RequireAuthentication>
                            <Cart />
                        </RequireAuthentication>
                    }
                ></Route>
                <Route
                    path="/login"
                    element={<Login />}
                ></Route>
                <Route
                    path="/signup"
                    element={<SignUp />}
                ></Route>{" "}
                <Route
                    path="/profile"
                    element={<ProfilePage />}
                ></Route>
                <Route
                    path="*"
                    element={<Error />}
                ></Route>
            </Routes>
            <Footer></Footer>
        </BrowserRouter>
    );
}
export default App;
