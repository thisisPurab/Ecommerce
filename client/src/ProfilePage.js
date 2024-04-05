import React, { useContext, useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebaseconfig";
import OrderHistory from "./components/OrderHistory";
import pfp from "./Assets/pfp.png";

const ProfilePage = () => {
    const { currentUser, dispatch } = useContext(AuthContext);

    const [dataArray, setDataArray] = useState([]);
    const [userName, setUserName] = useState("");

    // console.log(userName);

    const Auth = getAuth();
    const user = currentUser.uid;
    const userEmail = currentUser.email;
    // console.log(user);
    // console.log(userEmail);

    const q1 = query(
        collection(db, "Order_History"),
        where("user", "==", user)
    );

    const q2 = query(collection(db, "User"), where("email", "==", userEmail));

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot2 = await getDocs(q2);

                if (!querySnapshot2.empty) {
                    // If the query result is not empty, extract the first document's data
                    const userData = querySnapshot2.docs[0].data();
                    setUserName(userData.username);
                    // setUserName(userData);
                } else {
                    console.log("No user found with the specified email.");
                    // Handle case where no user is found with the specified email
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
                // Handle error
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot1 = await getDocs(q1);
                const fetchedDataArray = [];

                querySnapshot1.forEach((doc) => {
                    const docId = doc.id;
                    const docData = doc.data();
                    fetchedDataArray.push({ id: docId, data: docData });
                });

                setDataArray(fetchedDataArray);
            } catch (error) {
                console.error("Error fetching data:", error);
                // Handle error
            }
        };

        fetchData();
    }, []);

    // console.log(dataArray);

    const navigate = useNavigate();

    const handleSignOut = () => {
        // console.log("hi");
        signOut(Auth)
            .then(() => {
                dispatch({ type: "LOGOUT" });
                // console.log("hello");
                navigate("/");
            })
            .catch((error) => {
                alert("Sign Out Unseccussful");
            });
    };

    return (
        <>
            <div
                className="w-[80%] mx-[10%] py-10"
                style={{ height: "90vh" }}
            >
                <div className="flex justify-around">
                    <div className="h-52 w-52 rounded-full bg-gray-300">
                        <img
                            className="rounded-full"
                            src={pfp}
                            alt="profilepic"
                        />
                    </div>
                    <div className="flex justify-start">
                        <p className="text-7xl font-bold">{userName}</p>
                    </div>
                </div>
                <div className="w-full flex justify-end">
                    <button
                        className="mx-1 px-4 py-1 bg-transparent text-black border-2 border-black rounded-3xl"
                        onClick={handleSignOut}
                    >
                        Sign Out
                    </button>
                </div>
                <div className="w-full flex justify-around mt-10 mb-2">
                    <p className="w-1/5">Date</p>
                    <p className="w-1/5">Item</p>
                    <p className="w-1/5">Price</p>
                    <p className="w-1/5">Quantity</p>
                    <p className="w-1/5">SubTotal</p>
                </div>
                <hr />
                <div>
                    {dataArray.map((element) => (
                        <OrderHistory
                            key={element.data.id}
                            {...element.data}
                        ></OrderHistory>
                    ))}
                </div>
            </div>
        </>
    );
};
<div>Username</div>;

export default ProfilePage;
