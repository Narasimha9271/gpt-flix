import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_IMG, USER_ICON } from "../utils/constants";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const handleButtonClick = () => {
        //validate the form data
        const message = checkValidData(
            email.current.value,
            password.current.value
        );
        setErrorMessage(message);
        if (message) return;

        //signup/signin logic
        if (!isSignInForm) {
            //signup logic
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: USER_ICON,
                    })
                        .then(() => {
                            const { uid, email, displayName, photoURL } =
                                auth.currentUser;
                            dispatch(
                                addUser({
                                    uid: uid,
                                    email: email,
                                    displayName: displayName,
                                    photoURL: photoURL,
                                })
                            );

                            // navigate("/browse");
                        })
                        .catch((error) => {
                            setErrorMessage(error.message);
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        } else {
            //signin logic
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        }
    };
    const toggleSignIn = () => {
        setIsSignInForm(!isSignInForm);
    };
    return (
        <div className="relative">
            <Header />
            <div>
                <img
                    className="md:h-auto h-screen object-cover"
                    src={BACKGROUND_IMG}
                    alt="netflix-logo"
                />
            </div>

            <form
                onSubmit={(e) => e.preventDefault()}
                className="bg-black w-screen absolute top-36  md:w-3/12 md:absolute md:top-1/2 md:left-1/2  p-12  md:-translate-x-1/2 md:-translate-y-1/2 bg-opacity-85"
            >
                <h2 className="text-white text-3xl py-4">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h2>
                {!isSignInForm && (
                    <input
                        ref={name}
                        type="text"
                        placeholder="Full Name"
                        className=" text-white p-4 my-4 w-full bg-gray-800 rounded"
                    />
                )}
                <input
                    ref={email}
                    type="text"
                    placeholder="Email Address"
                    className="text-white p-4 my-4 w-full bg-gray-800 rounded"
                />
                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="text-white p-4 my-4 w-full  bg-gray-800 rounded"
                />
                <p className="text-red-600 font-bold">{errorMessage}</p>
                <button
                    className="p-4 my-6 rounded bg-red-700 w-full text-white"
                    onClick={handleButtonClick}
                >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p
                    className=" text-gray-600 cursor-pointer"
                    onClick={toggleSignIn}
                >
                    {isSignInForm
                        ? "New to Netflix? Sign up"
                        : "Already registered? Sign In"}
                </p>
            </form>
        </div>
    );
};

export default Login;
