import React from "react";
import { AiFillPlayCircle, AiFillInfoCircle } from "react-icons/ai";
const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-screen aspect-video pt-[10%]  px-12 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="py-6 text-lg w-1/3">{overview}</p>
            <div className="flex flex-row gap-2">
                <button className="bg-white text-black p-4 px-8 text-xl bg-opacity-90 rounded-md hover:bg-opacity-80 flex flex-row gap-1">
                    <div className="pt-1 ">
                        <AiFillPlayCircle />
                    </div>{" "}
                    <div>Play</div>
                </button>
                <button className="bg-gray-500 text-white p-4 px-8 text-xl bg-opacity-50 rounded-md flex flex-row gap-1">
                    <div className="pt-1 ">
                        <AiFillInfoCircle />
                    </div>{" "}
                    <div>More Info</div>
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
