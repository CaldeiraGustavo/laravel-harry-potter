import React from "react";

export default function CardDashboard(props) {
    return (
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 m-4 ">
            <div className="max-w-sm w-full lg:flex ">
                <div className="flex flex-wrap justify-center h-48">
                    <img
                        src={props.image || "https://www.mvasima.com/app_images/no_photo_neutral.svg?1617976616"}
                        className="p-1 bg-white max-w-sm h-48"
                        alt="..."
                    />
                </div>
                <div className="bg-white lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <div className="text-gray-900 font-bold text-xl mb-2">
                            {props.name}
                        </div>
                        <p className="text-gray-700 text-base">
                            {props.name} is a {props.species} {props.gender}
                        </p>
                    </div>
                    <div className="flex items-center">
                        <div className="text-sm">
                            <p className="text-gray-900 leading-none">
                                {props.actor ? (
                                    <> Played by: </>
                                ) : (
                                    <>Not a movie character</>
                                )}
                            </p>
                            <p className="text-gray-600">{props.actor}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
