import React from "react";
import { Helmet } from "react-helmet";
import parse from "react-html-parser";

const HelmetComponent = () => {
    const scripts = [
        "console.log('this would be the solution'); console.log('that we can use'); console.log('to dynamically add script tags')",
        "window.addEventListener('keyup', function(e) { console.log(e.key, ' was pressed') })",
        `function testAPI(){
            console.log("start api call")
            fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))
        }
        testAPI()
        `,
    ];

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
