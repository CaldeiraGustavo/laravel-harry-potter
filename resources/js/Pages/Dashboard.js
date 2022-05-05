import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";

export default function Dashboard(props) {
    console.log(props.characters);
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div>
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="max-w-sm w-full lg:max-w-full lg:flex ">
                            <div
                                className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                                style={{
                                    backgroundImage: `url("https://hp-api.herokuapp.com/images/harry.jpg")`,
                                }}
                                title="Woman holding a mug"
                            ></div>
                            <div className="bg-white border-b border-gray-200 lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <div className="mb-8">
                                    <div className="text-gray-900 font-bold text-xl mb-2">
                                        Can coffee make you a better developer?
                                    </div>
                                    <p className="text-gray-700 text-base">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Voluptatibus quia,
                                        nulla! Maiores et perferendis eaque,
                                        exercitationem praesentium nihil.
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <div className="text-sm">
                                        <p className="text-gray-900 leading-none">
                                            Jonathan Reinink
                                        </p>
                                        <p className="text-gray-600">Aug 18</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
