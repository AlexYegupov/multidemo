"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var client_1 = require("react-dom/client");
var App_tsx_1 = require("./App.tsx");
require("./index.css");
var test_ts_1 = require("./test.ts");
var testjs_js_1 = require("./testjs.js");
//let aa = 4; aa += 'R_OK';
function test(u) {
    //  console.log(u.name2)
    u.name = 'asdf';
    console.log("testts:", (0, test_ts_1.testts)({ name: 'vasya' }), 'a:', testjs_js_1.a);
}
//var a = 10;
//console.log(`111`)
test({ name: 'asdf' });
client_1.default.createRoot(document.getElementById('root')).render(<react_1.default.StrictMode>
    <App_tsx_1.default />
  </react_1.default.StrictMode>);
