

function ___$insertStyle(css) {
  if (!css) {
    return;
  }

  if (typeof window === 'undefined') {
    return;
  }

  const style = document.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var GoodMorning = function () {
    return (jsxRuntime.jsx("div", __assign({ style: { height: '300px', width: '300px', backgroundColor: 'red' } }, { children: jsxRuntime.jsx("p", __assign({ style: { fontSize: '30px', fontStyle: 'bold' } }, { children: "Good Morning" }), void 0) }), void 0));
};

var GoodNight = function () {
    return (jsxRuntime.jsx("div", __assign({ style: { height: '300px', width: '300px', backgroundColor: 'red' } }, { children: jsxRuntime.jsx("p", __assign({ style: { fontSize: '30px', fontStyle: 'bold' } }, { children: "Good Night" }), void 0) }), void 0));
};

var index = { GoodMorning: GoodMorning, GoodNight: GoodNight };

exports.default = index;
//# sourceMappingURL=index.js.map
