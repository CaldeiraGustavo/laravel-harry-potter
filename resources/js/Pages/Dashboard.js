import React, { useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import CardDashboard from "@/Components/CardDashboard";
import Pagination from "@/Components/Pagination/Pagination";

export default function Dashboard(props) {
    const [allCharacters, setAllCharacters] = useState(props.characters);
    const [currentCharacters, setCurrentCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(null);

    const onPageChanged = (data) => {
        const { currentPage, pageLimit } = data;

        const offset = (currentPage - 1) * pageLimit;
        setCurrentPage(currentPage);
        setCurrentCharacters(
            allCharacters.slice(offset, offset + pageLimit)
        );
    };

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
                <div className="py-12 grid grid-flow-row-dense grid-cols-3">
                    {currentCharacters.map((char, index) => (
                        <CardDashboard
                            key={index}
                            image={char.image}
                            name={char.name}
                            species={char.species}
                            gender={char.gender}
                            actor={char.actor}
                        />
                    ))}
                </div>
                <div className="d-flex flex-row py-4 align-items-center">
                    <Pagination
                        totalRecords={props.characters.length}
                        pageLimit={15}
                        pageNeighbours={1}
                        onPageChanged={onPageChanged}
                    />
                </div>
            </div>
        </Authenticated>
    );
}
