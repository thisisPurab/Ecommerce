import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebaseconfig";
import { AuthContext } from "../context/AuthContext";

const SigninPage = () => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const { dispatch } = useContext(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault();

        const auth = getAuth();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;

                dispatch({ type: "LOGIN", payload: user });

                setError(false);
                navigate("/");
                // console.log(user);
                // ...
            })
            .catch((error) => {
                setError(true);
            });
    };

    return (
        <div className="flex justify-center py-10 h-screen ">
            <div className="pt-10 px-10 h-4/5 border-black border-2 rounded-3xl shadow-xl w max-w-md w-full">
                <h1 className="text-3xl font-bold mb-5">Login </h1>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label
                            htmlFor="username"
                            className="block text-gray-700 font-bold mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Your Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 font-bold mb-2"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder=""
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full"
                    >
                        Login
                    </button>
                    {error && (
                        <div className="flex my-3 justify-center text-red-600">
                            Wrong Email Or Password
                        </div>
                    )}
                    <div className="w-full my-2 flex justify-end">
                        <NavLink to="/signup">
                            <button className="underline text-cyan-500">
                                Sign up?
                            </button>
                        </NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SigninPage;
