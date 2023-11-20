import React from "react";
import { Link } from "react-scroll";

function EventsCard({eventTitle, date, image, description}) {
    return (
        <>
            <div>
                <div>
                    <img
                        src={image}
                        className="w-full h-52 object-cover rounded"
                        alt=""
                    />
                </div>
                <div className="p-4 space-y-4">
                    <Link className="text-white font-medium text-2xl cursor-pointer hover:text-blue-400 hover:shadow-blue-300">
                        {eventTitle}
                    </Link>
                    <p> {
                        description !== null ? description : " "
                    }</p>
                    <div className="grid grid-cols-2">
                        <div className="flex space-x-2 place-items-center text-neutral-400 text-xs">
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-3 h-3"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div>{date}</div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EventsCard;
