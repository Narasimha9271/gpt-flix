import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };
    return (
        <div>
            <Header />
            <div className="absolute w-full h-full">
                <img
                    className="w-full h-full object-cover"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
                    alt="netflix-logo"
                />
            </div>

            <form className="absolute my-12 mx-auto right-0 left-0 p-6 sm:p-12 bg-black bg-opacity-75 w-11/12 md:w-3/12 text-white ">
                <h1 className="font-bold text-2xl sm:text-4xl py-4 sm:py-6 pl-2">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>

                <div className="flex flex-col">
                    {!isSignInForm && (
                        <input
                            type="text"
                            placeholder=" Full Name"
                            className="p-2 mb-2 sm:mb-3 bg-gray-800 h-12 text-gray-300 rounded-md"
                        />
                    )}
                    <input
                        type="Email"
                        placeholder="Email or phone number"
                        className="p-2 mb-2 bg-gray-800 h-12 text-gray-300 rounded-md"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="p-2 mb-2 sm:mt-2 bg-gray-800 h-12 text-gray-300 rounded-md"
                    />

                    {!isSignInForm && (
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="p-2 mt-2 sm:mt-3 bg-gray-800 h-12 text-gray-300 rounded-md"
                        />
                    )}

                    <button className="font-semibold h-12 bg-red-600 text-white rounded-md mt-6">
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </button>

                    <div className="flex flex-col sm:flex-row justify-center items-center mt-4">
                        <p className="text-gray-500 font-medium mb-2 sm:mb-0">
                            {isSignInForm
                                ? "New to Netflix?"
                                : "Already registered?"}
                        </p>
                        <p
                            className="font-medium cursor-pointer"
                            onClick={toggleSignInForm}
                        >
                            {!isSignInForm ? "Sign In" : "Sign Up"} Now
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
