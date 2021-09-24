import React from "react";
import { Helmet } from "react-helmet";

const Elf = (props) => {
    return (
        <div className="container elf-container">
            <Helmet>
                <title>Elf Page</title>
            </Helmet>
            <h1 className="title">Elf</h1>
        </div>
    );
};

export default Elf;
