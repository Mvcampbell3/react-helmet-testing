import React from "react";
import { HelmetComponent } from "../../components";

import scripts from "../../util/scripts";

const Grinch = () => {
    return (
        <div className="container grinch-container">
            <HelmetComponent title="Grinch Page" scripts={scripts} />
            <h1 className="title">Grinch</h1>
        </div>
    );
};

export default Grinch;
