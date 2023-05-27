//Code snippets: rcc to create component

import React from "react";
import ReactDOM from "react-dom";
import Hello from './components/Hello.js';
import App from "./App.js";

//const element = <h1>Hello World</h1>;
//ReactDOM.render(element, document.getElementById('root'));

// ReactDOM.render(
//     <React.StrictMode>
//         You can write text here and it will appear on the site.
//         <Hello/>
//     </React.StrictMode>,
//     document.getElementById('root')
// );

ReactDOM.render(<App/>, document.getElementById('root'));