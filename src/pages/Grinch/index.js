import React from "react";
import { HelmetComponent } from "../../compenents";
const Grinch = (props) => {
    return (
        <div className="container grinch-container">
            <HelmetComponent title="Grinch Page" />
            <h1 className="title">Grinch</h1>
        </div>
    );
};

export default Grinch;
