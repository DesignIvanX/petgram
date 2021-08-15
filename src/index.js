import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

ReactDOM.render(<App />, document.querySelector("#root"));
// {
//   "version": 2,
//   "alias": ["petgram-api-rest"],
//   "builds": [
//     {
//       "use": "@vercel/static-build",
//       "src": "package.json"
//     }
//   ],
//   "routes": [
//     {
//       "src": "(.*).js",
//       "dest": "/$1.js"
//     },
//     {
//       "src": "(.*).json",
//       "dest": "/$1.json"
//     },
//     {
//       "src": "/.*",
//       "dest": "./index.html"
//     }
//   ]
// }

// {
//   "version": 2,
//   "alias": ["instagrampet-api-rest"],
//   "builds": [{ "src": "index.js", "use": "@vercel/node" }],
//   "routes": [
//     {
//       "headers": {
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
//         "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept"
//       },
//       "src": "/.*",
//       "dest": "index.js"
//     }
//   ]
// }
