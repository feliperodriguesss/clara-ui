var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, CloseButton } from './components';
var Details = {
    name: 'Jeferson',
};
export { Details, Button, CloseButton };
function App() {
    return (_jsx("div", __assign({ style: {
            backgroundColor: '#282c34',
            color: 'white',
            height: '100vh',
            width: '100vw',
        }, className: "App" }, { children: _jsx("h1", { children: "@clara/ui" }, void 0) }), void 0));
}
ReactDOM.render(_jsx(React.StrictMode, { children: _jsx(App, {}, void 0) }, void 0), document.getElementById('root'));
