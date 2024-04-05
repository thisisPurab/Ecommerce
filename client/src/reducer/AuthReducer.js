const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { currentUser: action.payload };
        case "LOGOUT":
            return false;
        default:
            return state;
    }
};

export default AuthReducer;
