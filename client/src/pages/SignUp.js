import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebaseconfig";
import { doc, setDoc } from "firebase/firestore";

const SigninPage = () => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const navigate = useNavigate();

    const saveUsername = async () => {
        await setDoc(doc(db, "User", username), {
            email,
            username,
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();

        const auth = getAuth();

        saveUsername(username);

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                setError(false);
                navigate("/login");
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
                <h1 className="text-3xl font-bold mb-5">Sign Up</h1>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label
                            htmlFor="username"
                            className="block text-gray-700 font-bold mb-2"
                        >
                            Username
                        </label>
                        <input
                            type="username"
                            id="username"
                            name="username"
                            className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Your Username"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
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
                        Sign Up
                    </button>

                    <div className="w-full my-2 flex justify-end">
                        <NavLink to="/login">
                            <button className="underline text-cyan-500">
                                Login?
                            </button>
                        </NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SigninPage;
