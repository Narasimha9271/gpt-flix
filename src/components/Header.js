import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const user = useSelector((store) => store.user);
    const navigate = useNavigate();
    const handleSignOut = () => {
        //signout logic
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                navigate("/");
            })
            .catch((error) => {
                navigate("/error");
            });
    };
    return (
        <div className="absolute px-6 py-2 bg-gradient-to-b flex flex-row justify-between from-black z-10 w-screen">
            <img
                className="w-48"
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="netflix-logo"
            />
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
