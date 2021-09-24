import React from "react";
import { Helmet } from "react-helmet";
import parse from "react-html-parser";

const HelmetComponent = ({ scripts = [] }) => {
    const test1 = "<title>We can parse titles, styles, meta</title>";
    const test2 = "<script>console.log('we cannot parse script tags')</script>";
    return (
        <Helmet>
            {parse(test1)}
            {parse(test2)}
            <script>console.log("this will show")</script>
            {scripts.map((sci, i) => (
                <script key={i}>{sci}</script>
            ))}
        </Helmet>
    );
};

export default HelmetComponent;
