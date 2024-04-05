import { createContext, useEffect, useReducer } from "react";
import reducer from "../../src/reducer/AuthReducer";

export const AuthContext = createContext();

// const getLocalStorageData = () => {
//     let localStorageData = localStorage.getItem("user");
//     if (localStorageData == undefined) {
//         return {};
//     } else {
//         return JSON.parse(localStorageData);
//     }
// };

const getLocalStorageData = () => {
    let localStorageData = localStorage.getItem("user");
    if (!!localStorageData) {
        return null;
    } else {
        return JSON.parse(localStorageData);
    }
};

export const initialState = {
    currentUser: getLocalStorageData(),
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.currentUser));
    }, [state.currentUser]);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
