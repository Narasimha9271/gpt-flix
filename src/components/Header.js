import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
const Header = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const user = useSelector((store) => store.user);

    const handleSignOut = () => {
        //signout logic
        signOut(auth)
            .then(() => {})
            .catch((error) => {
                navigate("/error");
            });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                //sign in case
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL,
                    })
                );
                navigate("/browse");
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/");
            }
        });

        //this will be unsubscribe when the component unmounts
        return () => unsubscribe();
    }, []);
    return (
        <div className="absolute px-6 py-2 bg-gradient-to-b flex flex-row justify-between from-black z-10 w-screen">
            <img className="w-48" src={LOGO} alt="netflix-logo" />
            {user && (
                <div className="flex">
                    <img
                        className="h-10 w-10 rounded-2xl mt-4"
                        src={user?.photoURL}
                        alt="user-logo"
                    />
                    <button
                        onClick={handleSignOut}
                        className="bg-black font-semibold p-2 h-10 mt-4 m-1 rounded-lg text-white"
                    >
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;
