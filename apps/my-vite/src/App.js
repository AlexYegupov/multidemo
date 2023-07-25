"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_svg_1 = require("./assets/react.svg");
//import viteLogo from '/vite.svg'
require("./App.css");
function App() {
    var _a = (0, react_1.useState)(0), count = _a[0], setCount = _a[1];
    // const fff = (p) => {
    //   console.log(`123`, p)
    //   console.log(`123`)
    //   let a;
    //   if (p > 5) a = 1
    //   a = 'asdf';
    //   console.log(a)
    // }
    return (<>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={react_svg_1.default} className="logo react" alt="React logo"/>
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={function () { return setCount(function (count) { return count + 1; }); }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>);
}
exports.default = App;
