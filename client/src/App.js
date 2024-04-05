import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import Error from "./Error";
import { Nav } from "./components/Nav";
import Footer from "./components/Footer";
import Login from "./Login";
import SignUp from "./SignUp";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import ProfilePage from "./ProfilePage";

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
