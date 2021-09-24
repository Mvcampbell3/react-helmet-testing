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

export default scripts;
