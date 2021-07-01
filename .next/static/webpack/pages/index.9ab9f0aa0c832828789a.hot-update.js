webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/native-url/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/native-url/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var t,e=(t=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js"))&&"object"==typeof t&&"default"in t?t.default:t,o=/https?|ftp|gopher|file/;function r(t){"string"==typeof t&&(t=d(t));var r=function(t,e,o){var r=t.auth,a=t.hostname,s=t.protocol||"",p=t.pathname||"",n=t.hash||"",c=t.query||"",h=!1;r=r?encodeURIComponent(r).replace(/%3A/i,":")+"@":"",t.host?h=r+t.host:a&&(h=r+(~a.indexOf(":")?"["+a+"]":a),t.port&&(h+=":"+t.port)),c&&"object"==typeof c&&(c=e.encode(c));var l=t.search||c&&"?"+c||"";return s&&":"!==s.substr(-1)&&(s+=":"),t.slashes||(!s||o.test(s))&&!1!==h?(h="//"+(h||""),p&&"/"!==p[0]&&(p="/"+p)):h||(h=""),n&&"#"!==n[0]&&(n="#"+n),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:h,pathname:p=p.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:n}}(t,e,o);return""+r.protocol+r.host+r.pathname+r.search+r.hash}var a="http://",s="w.w",p=a+s,n=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,c=/https?|ftp|gopher|file/;function h(t,e){var o="string"==typeof t?d(t):t;t="object"==typeof t?r(t):t;var s=d(e),h="";o.protocol&&!o.slashes&&(h=o.protocol,t=t.replace(o.protocol,""),h+="/"===e[0]||"/"===t[0]?"/":""),h&&s.protocol&&(h="",s.slashes||(h=s.protocol,e=e.replace(s.protocol,"")));var l=t.match(n);l&&!s.protocol&&(t=t.substr((h=l[1]+(l[2]||"")).length),/^\/\/[^/]/.test(e)&&(h=h.slice(0,-1)));var i=new URL(t,p+"/"),u=new URL(e,i).toString().replace(p,""),f=s.protocol||o.protocol;return f+=o.slashes||s.slashes?"//":"",!h&&f?u=u.replace(a,f):h&&(u=u.replace(a,"")),c.test(u)||~e.indexOf(".")||"/"===t.slice(-1)||"/"===e.slice(-1)||"/"!==u.slice(-1)||(u=u.slice(0,-1)),h&&(u=h+("/"===u[0]?u.substr(1):u)),u}function l(){}l.prototype.parse=d,l.prototype.format=r,l.prototype.resolve=h,l.prototype.resolveObject=h;var i=/^https?|ftp|gopher|file/,u=/^(.*?)([#?].*)/,f=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,m=/^([a-z0-9.+-]*:)?\/\/\/*/i,v=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function d(t,o,a){if(void 0===o&&(o=!1),void 0===a&&(a=!1),t&&"object"==typeof t&&t instanceof l)return t;var n=(t=t.trim()).match(u);t=n?n[1].replace(/\\/g,"/")+n[2]:t.replace(/\\/g,"/"),v.test(t)&&"/"!==t.slice(-1)&&(t+="/");var c=!/(^javascript)/.test(t)&&t.match(f),h=m.test(t),d="";c&&(i.test(c[1])||(d=c[1].toLowerCase(),t=""+c[2]+c[3]),c[2]||(h=!1,i.test(c[1])?(d=c[1],t=""+c[3]):t="//"+c[3]),3!==c[2].length&&1!==c[2].length||(d=c[1],t="/"+c[3]));var g,y=(n?n[1]:t).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/),b=y&&y[1],C=new l,U="",j="";try{g=new URL(t)}catch(e){U=e,d||a||!/^\/\//.test(t)||/^\/\/.+[@.]/.test(t)||(j="/",t=t.substr(1));try{g=new URL(t,p)}catch(t){return C.protocol=d,C.href=d,C}}C.slashes=h&&!j,C.host=g.host===s?"":g.host,C.hostname=g.hostname===s?"":g.hostname.replace(/(\[|\])/g,""),C.protocol=U?d||null:g.protocol,C.search=g.search.replace(/\\/g,"%5C"),C.hash=g.hash.replace(/\\/g,"%5C");var w=t.split("#");!C.search&&~w[0].indexOf("?")&&(C.search="?"),C.hash||""!==w[1]||(C.hash="#"),C.query=o?e.decode(g.search.substr(1)):C.search.substr(1),C.pathname=j+(c?function(t){return t.replace(/['^|`]/g,function(t){return"%"+t.charCodeAt().toString(16).toUpperCase()}).replace(/((?:%[0-9A-F]{2})+)/g,function(t,e){try{return decodeURIComponent(e).split("").map(function(t){var e=t.charCodeAt();return e>256||/^[a-z0-9]$/i.test(t)?t:"%"+e.toString(16).toUpperCase()}).join("")}catch(t){return e}})}(g.pathname):g.pathname),"about:"===C.protocol&&"blank"===C.pathname&&(C.protocol="",C.pathname=""),U&&"/"!==t[0]&&(C.pathname=C.pathname.substr(1)),d&&!i.test(d)&&"/"!==t.slice(-1)&&"/"===C.pathname&&(C.pathname=""),C.path=C.pathname+C.search,C.auth=[g.username,g.password].map(decodeURIComponent).filter(Boolean).join(":"),C.port=g.port,b&&!C.host.endsWith(b)&&(C.host+=b,C.port=b.slice(1)),C.href=j?""+C.pathname+C.search+C.hash:r(C);var x=/^(file)/.test(C.href)?["host","hostname"]:[];return Object.keys(C).forEach(function(t){~x.indexOf(t)||(C[t]=C[t]||null)}),C}exports.parse=d,exports.format=r,exports.resolve=h,exports.resolveObject=function(t,e){return d(h(t,e))},exports.Url=l;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/next/dist/compiled/escape-string-regexp/index.js":
/*!***********************************************!*\
  !*** (webpack)/escape-string-regexp/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports=(()=>{"use strict";var e={813:e=>{const r=/[|\\{}()[\]^$+*?.-]/g;e.exports=(e=>{if(typeof e!=="string"){throw new TypeError("Expected a string")}return e.replace(r,"\\$&")})}};var r={};function __nccwpck_require__(t){if(r[t]){return r[t].exports}var _=r[t]={exports:{}};var a=true;try{e[t](_,_.exports,__nccwpck_require__);a=false}finally{if(a)delete r[t]}return _.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(813)})();
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************!*\
  !*** (webpack)/path-to-regexp/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/lib/load-custom-routes.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/dist/lib/load-custom-routes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.getRedirectStatus=getRedirectStatus;exports.normalizeRouteRegex=normalizeRouteRegex;exports.default=loadCustomRoutes;exports.allowedStatusCodes=void 0;var _url=__webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");var pathToRegexp=_interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));var _escapeStringRegexp=_interopRequireDefault(__webpack_require__(/*! next/dist/compiled/escape-string-regexp */ "./node_modules/next/dist/compiled/escape-string-regexp/index.js"));var _constants=__webpack_require__(/*! ../next-server/lib/constants */ "./node_modules/next/dist/next-server/lib/constants.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap();_getRequireWildcardCache=function(){return cache;};return cache;}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}const allowedStatusCodes=new Set([301,302,303,307,308]);exports.allowedStatusCodes=allowedStatusCodes;function getRedirectStatus(route){return route.statusCode||(route.permanent?_constants.PERMANENT_REDIRECT_STATUS:_constants.TEMPORARY_REDIRECT_STATUS);}function normalizeRouteRegex(regex){// clean up un-necessary escaping from regex.source which turns / into \\/
return regex.replace(/\\\//g,'/');}function checkRedirect(route){const invalidParts=[];let hadInvalidStatus=false;if(route.statusCode&&!allowedStatusCodes.has(route.statusCode)){hadInvalidStatus=true;invalidParts.push(`\`statusCode\` is not undefined or valid statusCode`);}if(typeof route.permanent!=='boolean'&&!route.statusCode){invalidParts.push(`\`permanent\` is not set to \`true\` or \`false\``);}return{invalidParts,hadInvalidStatus};}function checkHeader(route){const invalidParts=[];if(!Array.isArray(route.headers)){invalidParts.push('`headers` field must be an array');}else{for(const header of route.headers){if(!header||typeof header!=='object'){invalidParts.push("`headers` items must be object with { key: '', value: '' }");break;}if(typeof header.key!=='string'){invalidParts.push('`key` in header item must be string');break;}if(typeof header.value!=='string'){invalidParts.push('`value` in header item must be string');break;}}}return invalidParts;}function tryParsePath(route,handleUrl){const result={};let routePath=route;try{if(handleUrl){const parsedDestination=(0,_url.parse)(route,true);routePath=`${parsedDestination.pathname}${parsedDestination.hash||''}`;}// Make sure we can parse the source properly
result.tokens=pathToRegexp.parse(routePath);pathToRegexp.tokensToRegexp(result.tokens);}catch(err){// If there is an error show our err.sh but still show original error or a formatted one if we can
const errMatches=err.message.match(/at (\d{0,})/);if(errMatches){const position=parseInt(errMatches[1],10);console.error(`\nError parsing \`${route}\` `+`https://err.sh/vercel/next.js/invalid-route-source\n`+`Reason: ${err.message}\n\n`+`  ${routePath}\n`+`  ${new Array(position).fill(' ').join('')}^\n`);}else{console.error(`\nError parsing ${route} https://err.sh/vercel/next.js/invalid-route-source`,err);}result.error=true;}return result;}function checkCustomRoutes(routes,type){if(!Array.isArray(routes)){throw new Error(`${type}s must return an array, received ${typeof routes}.\n`+`See here for more info: https://err.sh/next.js/routes-must-be-array`);}let numInvalidRoutes=0;let hadInvalidStatus=false;const isRedirect=type==='redirect';let allowedKeys;if(type==='rewrite'||isRedirect){allowedKeys=new Set(['source','destination','basePath','locale',...(isRedirect?['statusCode','permanent']:[])]);}else{allowedKeys=new Set(['source','headers','basePath','locale']);}for(const route of routes){if(!route||typeof route!=='object'){console.error(`The route ${JSON.stringify(route)} is not a valid object with \`source\` and \`${type==='header'?'headers':'destination'}\``);numInvalidRoutes++;continue;}if(type==='rewrite'&&route.basePath===false&&!(route.destination.startsWith('http://')||route.destination.startsWith('https://'))){console.error(`The route ${route.source} rewrites urls outside of the basePath. Please use a destination that starts with \`http://\` or \`https://\` https://err.sh/vercel/next.js/invalid-external-rewrite.md`);numInvalidRoutes++;continue;}const keys=Object.keys(route);const invalidKeys=keys.filter(key=>!allowedKeys.has(key));const invalidParts=[];if(typeof route.basePath!=='undefined'&&route.basePath!==false){invalidParts.push('`basePath` must be undefined or false');}if(typeof route.locale!=='undefined'&&route.locale!==false){invalidParts.push('`locale` must be undefined or false');}if(!route.source){invalidParts.push('`source` is missing');}else if(typeof route.source!=='string'){invalidParts.push('`source` is not a string');}else if(!route.source.startsWith('/')){invalidParts.push('`source` does not start with /');}if(type==='header'){invalidParts.push(...checkHeader(route));}else{let _route=route;if(!_route.destination){invalidParts.push('`destination` is missing');}else if(typeof _route.destination!=='string'){invalidParts.push('`destination` is not a string');}else if(type==='rewrite'&&!_route.destination.match(/^(\/|https:\/\/|http:\/\/)/)){invalidParts.push('`destination` does not start with `/`, `http://`, or `https://`');}}if(type==='redirect'){const result=checkRedirect(route);hadInvalidStatus=hadInvalidStatus||result.hadInvalidStatus;invalidParts.push(...result.invalidParts);}let sourceTokens;if(typeof route.source==='string'&&route.source.startsWith('/')){// only show parse error if we didn't already show error
// for not being a string
const{tokens,error}=tryParsePath(route.source);if(error){invalidParts.push('`source` parse failed');}sourceTokens=tokens;}// make sure no unnamed patterns are attempted to be used in the
// destination as this can cause confusion and is not allowed
if(typeof route.destination==='string'){if(route.destination.startsWith('/')&&Array.isArray(sourceTokens)){const unnamedInDest=new Set();for(const token of sourceTokens){if(typeof token==='object'&&typeof token.name==='number'){const unnamedIndex=new RegExp(`:${token.name}(?!\\d)`);if(route.destination.match(unnamedIndex)){unnamedInDest.add(`:${token.name}`);}}}if(unnamedInDest.size>0){invalidParts.push(`\`destination\` has unnamed params ${[...unnamedInDest].join(', ')}`);}else{const{tokens:destTokens,error:destinationParseFailed}=tryParsePath(route.destination,true);if(destinationParseFailed){invalidParts.push('`destination` parse failed');}else{const sourceSegments=new Set(sourceTokens.map(item=>typeof item==='object'&&item.name).filter(Boolean));const invalidDestSegments=new Set();for(const token of destTokens){if(typeof token==='object'&&!sourceSegments.has(token.name)){invalidDestSegments.add(token.name);}}if(invalidDestSegments.size){invalidParts.push(`\`destination\` has segments not in \`source\` (${[...invalidDestSegments].join(', ')})`);}}}}}const hasInvalidKeys=invalidKeys.length>0;const hasInvalidParts=invalidParts.length>0;if(hasInvalidKeys||hasInvalidParts){console.error(`${invalidParts.join(', ')}${invalidKeys.length?(hasInvalidParts?',':'')+` invalid field${invalidKeys.length===1?'':'s'}: `+invalidKeys.join(','):''} for route ${JSON.stringify(route)}`);numInvalidRoutes++;}}if(numInvalidRoutes>0){if(hadInvalidStatus){console.error(`\nValid redirect statusCode values are ${[...allowedStatusCodes].join(', ')}`);}console.error();throw new Error(`Invalid ${type}${numInvalidRoutes===1?'':'s'} found`);}}function processRoutes(routes,config,type){const _routes=routes;const newRoutes=[];const defaultLocales=[];if(config.i18n&&type==='redirect'){for(const item of((_config$i18n=config.i18n)==null?void 0:_config$i18n.domains)||[]){var _config$i18n;defaultLocales.push({locale:item.defaultLocale,base:`http${item.http?'':'s'}://${item.domain}`});}defaultLocales.push({locale:config.i18n.defaultLocale,base:''});}for(const r of _routes){var _r$destination;const srcBasePath=config.basePath&&r.basePath!==false?config.basePath:'';const isExternal=!((_r$destination=r.destination)!=null&&_r$destination.startsWith('/'));const destBasePath=srcBasePath&&!isExternal?srcBasePath:'';if(config.i18n&&r.locale!==false){var _r$destination2;defaultLocales.forEach(item=>{let destination;if(r.destination){destination=item.base?`${item.base}${destBasePath}${r.destination}`:`${destBasePath}${r.destination}`;}newRoutes.push({...r,destination,source:`${srcBasePath}/${item.locale}${r.source}`});});r.source=`/:nextInternalLocale(${config.i18n.locales.map(locale=>(0,_escapeStringRegexp.default)(locale)).join('|')})${r.source==='/'&&!config.trailingSlash?'':r.source}`;if(r.destination&&(_r$destination2=r.destination)!=null&&_r$destination2.startsWith('/')){r.destination=`/:nextInternalLocale${r.destination==='/'&&!config.trailingSlash?'':r.destination}`;}}r.source=`${srcBasePath}${r.source}`;if(r.destination){r.destination=`${destBasePath}${r.destination}`;}newRoutes.push(r);}return newRoutes;}async function loadRedirects(config){if(typeof config.redirects!=='function'){return[];}let redirects=await config.redirects();checkCustomRoutes(redirects,'redirect');return processRoutes(redirects,config,'redirect');}async function loadRewrites(config){if(typeof config.rewrites!=='function'){return[];}let rewrites=await config.rewrites();checkCustomRoutes(rewrites,'rewrite');return processRoutes(rewrites,config,'rewrite');}async function loadHeaders(config){if(typeof config.headers!=='function'){return[];}let headers=await config.headers();checkCustomRoutes(headers,'header');return processRoutes(headers,config,'header');}async function loadCustomRoutes(config){const[headers,rewrites,redirects]=await Promise.all([loadHeaders(config),loadRewrites(config),loadRedirects(config)]);if(config.trailingSlash){redirects.unshift({source:'/:file((?!\\.well-known(?:/.*)?)(?:[^/]+/)*[^/]+\\.\\w+)/',destination:'/:file',permanent:true,locale:config.i18n?false:undefined,internal:true},{source:'/:notfile((?!\\.well-known(?:/.*)?)(?:[^/]+/)*[^/\\.]+)',destination:'/:notfile/',permanent:true,locale:config.i18n?false:undefined,internal:true});if(config.basePath){redirects.unshift({source:config.basePath,destination:config.basePath+'/',permanent:true,basePath:false,locale:config.i18n?false:undefined,internal:true});}}else{redirects.unshift({source:'/:path+/',destination:'/:path+',permanent:true,locale:config.i18n?false:undefined,internal:true});if(config.basePath){redirects.unshift({source:config.basePath+'/',destination:config.basePath,permanent:true,basePath:false,locale:config.i18n?false:undefined,internal:true});}}return{headers,rewrites,redirects};}
//# sourceMappingURL=load-custom-routes.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/constants.js":
/*!*************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/constants.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.OPTIMIZED_FONT_PROVIDERS = exports.SERVER_PROPS_ID = exports.STATIC_PROPS_ID = exports.PERMANENT_REDIRECT_STATUS = exports.TEMPORARY_REDIRECT_STATUS = exports.CLIENT_STATIC_FILES_RUNTIME_POLYFILLS = exports.CLIENT_STATIC_FILES_RUNTIME_WEBPACK = exports.CLIENT_STATIC_FILES_RUNTIME_AMP = exports.CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH = exports.CLIENT_STATIC_FILES_RUNTIME_MAIN = exports.STRING_LITERAL_DROP_BUNDLE = exports.AMP_RENDER_TARGET = exports.CLIENT_STATIC_FILES_RUNTIME = exports.CLIENT_STATIC_FILES_PATH = exports.CLIENT_PUBLIC_FILES_PATH = exports.BLOCKED_PAGES = exports.BUILD_ID_FILE = exports.CONFIG_FILE = exports.SERVERLESS_DIRECTORY = exports.SERVER_DIRECTORY = exports.FONT_MANIFEST = exports.REACT_LOADABLE_MANIFEST = exports.DEV_CLIENT_PAGES_MANIFEST = exports.SERVER_FILES_MANIFEST = exports.IMAGES_MANIFEST = exports.ROUTES_MANIFEST = exports.PRERENDER_MANIFEST = exports.EXPORT_DETAIL = exports.EXPORT_MARKER = exports.BUILD_MANIFEST = exports.PAGES_MANIFEST = exports.PHASE_DEVELOPMENT_SERVER = exports.PHASE_PRODUCTION_SERVER = exports.PHASE_PRODUCTION_BUILD = exports.PHASE_EXPORT = void 0;
var PHASE_EXPORT = 'phase-export';
exports.PHASE_EXPORT = PHASE_EXPORT;
var PHASE_PRODUCTION_BUILD = 'phase-production-build';
exports.PHASE_PRODUCTION_BUILD = PHASE_PRODUCTION_BUILD;
var PHASE_PRODUCTION_SERVER = 'phase-production-server';
exports.PHASE_PRODUCTION_SERVER = PHASE_PRODUCTION_SERVER;
var PHASE_DEVELOPMENT_SERVER = 'phase-development-server';
exports.PHASE_DEVELOPMENT_SERVER = PHASE_DEVELOPMENT_SERVER;
var PAGES_MANIFEST = 'pages-manifest.json';
exports.PAGES_MANIFEST = PAGES_MANIFEST;
var BUILD_MANIFEST = 'build-manifest.json';
exports.BUILD_MANIFEST = BUILD_MANIFEST;
var EXPORT_MARKER = 'export-marker.json';
exports.EXPORT_MARKER = EXPORT_MARKER;
var EXPORT_DETAIL = 'export-detail.json';
exports.EXPORT_DETAIL = EXPORT_DETAIL;
var PRERENDER_MANIFEST = 'prerender-manifest.json';
exports.PRERENDER_MANIFEST = PRERENDER_MANIFEST;
var ROUTES_MANIFEST = 'routes-manifest.json';
exports.ROUTES_MANIFEST = ROUTES_MANIFEST;
var IMAGES_MANIFEST = 'images-manifest.json';
exports.IMAGES_MANIFEST = IMAGES_MANIFEST;
var SERVER_FILES_MANIFEST = 'required-server-files.json';
exports.SERVER_FILES_MANIFEST = SERVER_FILES_MANIFEST;
var DEV_CLIENT_PAGES_MANIFEST = '_devPagesManifest.json';
exports.DEV_CLIENT_PAGES_MANIFEST = DEV_CLIENT_PAGES_MANIFEST;
var REACT_LOADABLE_MANIFEST = 'react-loadable-manifest.json';
exports.REACT_LOADABLE_MANIFEST = REACT_LOADABLE_MANIFEST;
var FONT_MANIFEST = 'font-manifest.json';
exports.FONT_MANIFEST = FONT_MANIFEST;
var SERVER_DIRECTORY = 'server';
exports.SERVER_DIRECTORY = SERVER_DIRECTORY;
var SERVERLESS_DIRECTORY = 'serverless';
exports.SERVERLESS_DIRECTORY = SERVERLESS_DIRECTORY;
var CONFIG_FILE = 'next.config.js';
exports.CONFIG_FILE = CONFIG_FILE;
var BUILD_ID_FILE = 'BUILD_ID';
exports.BUILD_ID_FILE = BUILD_ID_FILE;
var BLOCKED_PAGES = ['/_document', '/_app'];
exports.BLOCKED_PAGES = BLOCKED_PAGES;
var CLIENT_PUBLIC_FILES_PATH = 'public';
exports.CLIENT_PUBLIC_FILES_PATH = CLIENT_PUBLIC_FILES_PATH;
var CLIENT_STATIC_FILES_PATH = 'static';
exports.CLIENT_STATIC_FILES_PATH = CLIENT_STATIC_FILES_PATH;
var CLIENT_STATIC_FILES_RUNTIME = 'runtime';
exports.CLIENT_STATIC_FILES_RUNTIME = CLIENT_STATIC_FILES_RUNTIME;
var AMP_RENDER_TARGET = '__NEXT_AMP_RENDER_TARGET__';
exports.AMP_RENDER_TARGET = AMP_RENDER_TARGET;
var STRING_LITERAL_DROP_BUNDLE = '__NEXT_DROP_CLIENT_FILE__'; // static/runtime/main.js

exports.STRING_LITERAL_DROP_BUNDLE = STRING_LITERAL_DROP_BUNDLE;
var CLIENT_STATIC_FILES_RUNTIME_MAIN = "main"; // static/runtime/react-refresh.js

exports.CLIENT_STATIC_FILES_RUNTIME_MAIN = CLIENT_STATIC_FILES_RUNTIME_MAIN;
var CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH = "react-refresh"; // static/runtime/amp.js

exports.CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH = CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH;
var CLIENT_STATIC_FILES_RUNTIME_AMP = "amp"; // static/runtime/webpack.js

exports.CLIENT_STATIC_FILES_RUNTIME_AMP = CLIENT_STATIC_FILES_RUNTIME_AMP;
var CLIENT_STATIC_FILES_RUNTIME_WEBPACK = "webpack"; // static/runtime/polyfills.js

exports.CLIENT_STATIC_FILES_RUNTIME_WEBPACK = CLIENT_STATIC_FILES_RUNTIME_WEBPACK;
var CLIENT_STATIC_FILES_RUNTIME_POLYFILLS = "polyfills";
exports.CLIENT_STATIC_FILES_RUNTIME_POLYFILLS = CLIENT_STATIC_FILES_RUNTIME_POLYFILLS;
var TEMPORARY_REDIRECT_STATUS = 307;
exports.TEMPORARY_REDIRECT_STATUS = TEMPORARY_REDIRECT_STATUS;
var PERMANENT_REDIRECT_STATUS = 308;
exports.PERMANENT_REDIRECT_STATUS = PERMANENT_REDIRECT_STATUS;
var STATIC_PROPS_ID = '__N_SSG';
exports.STATIC_PROPS_ID = STATIC_PROPS_ID;
var SERVER_PROPS_ID = '__N_SSP';
exports.SERVER_PROPS_ID = SERVER_PROPS_ID;
var OPTIMIZED_FONT_PROVIDERS = ['https://fonts.googleapis.com/css'];
exports.OPTIMIZED_FONT_PROVIDERS = OPTIMIZED_FONT_PROVIDERS;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");
/* harmony import */ var next_dist_lib_load_custom_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/lib/load-custom-routes */ "./node_modules/next/dist/lib/load-custom-routes.js");
/* harmony import */ var next_dist_lib_load_custom_routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_load_custom_routes__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\Linh tinh\\JavaScript\\Learning React\\20-onwards-to-a-bigger-project-starting-project\\20-onwards-to-a-bigger-project-starting-project\\pages\\index.js";



function HomePage(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    meetups: props.meetups
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 10
  }, this);
}

_c = HomePage;
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: { meetups: DUMMY_MEETUPS},
//   };
//}
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25hdGl2ZS11cmwvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLyh3ZWJwYWNrKS9lc2NhcGUtc3RyaW5nLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLyh3ZWJwYWNrKS9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9saWIvbG9hZC1jdXN0b20tcm91dGVzLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3F1ZXJ5c3RyaW5nLWVzMy9kZWNvZGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9xdWVyeXN0cmluZy1lczMvZW5jb2RlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcXVlcnlzdHJpbmctZXMzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJQSEFTRV9FWFBPUlQiLCJQSEFTRV9QUk9EVUNUSU9OX0JVSUxEIiwiUEhBU0VfUFJPRFVDVElPTl9TRVJWRVIiLCJQSEFTRV9ERVZFTE9QTUVOVF9TRVJWRVIiLCJQQUdFU19NQU5JRkVTVCIsIkJVSUxEX01BTklGRVNUIiwiRVhQT1JUX01BUktFUiIsIkVYUE9SVF9ERVRBSUwiLCJQUkVSRU5ERVJfTUFOSUZFU1QiLCJST1VURVNfTUFOSUZFU1QiLCJJTUFHRVNfTUFOSUZFU1QiLCJTRVJWRVJfRklMRVNfTUFOSUZFU1QiLCJERVZfQ0xJRU5UX1BBR0VTX01BTklGRVNUIiwiUkVBQ1RfTE9BREFCTEVfTUFOSUZFU1QiLCJGT05UX01BTklGRVNUIiwiU0VSVkVSX0RJUkVDVE9SWSIsIlNFUlZFUkxFU1NfRElSRUNUT1JZIiwiQ09ORklHX0ZJTEUiLCJCVUlMRF9JRF9GSUxFIiwiQkxPQ0tFRF9QQUdFUyIsIkNMSUVOVF9QVUJMSUNfRklMRVNfUEFUSCIsIkNMSUVOVF9TVEFUSUNfRklMRVNfUEFUSCIsIkNMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRSIsIkFNUF9SRU5ERVJfVEFSR0VUIiwiU1RSSU5HX0xJVEVSQUxfRFJPUF9CVU5ETEUiLCJDTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfTUFJTiIsIkNMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9SRUFDVF9SRUZSRVNIIiwiQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX0FNUCIsIkNMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9XRUJQQUNLIiwiQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX1BPTFlGSUxMUyIsIlRFTVBPUkFSWV9SRURJUkVDVF9TVEFUVVMiLCJQRVJNQU5FTlRfUkVESVJFQ1RfU1RBVFVTIiwiU1RBVElDX1BST1BTX0lEIiwiU0VSVkVSX1BST1BTX0lEIiwiT1BUSU1JWkVEX0ZPTlRfUFJPVklERVJTIiwiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLFdBQVcsbUJBQU8sQ0FBQyw0REFBYSw2RUFBNkUsY0FBYyw2QkFBNkIsc0JBQXNCLDRGQUE0Riw2S0FBNkssNkJBQTZCLGlMQUFpTCx5R0FBeUcsUUFBUSxzREFBc0QsdUdBQXVHLGdCQUFnQixnQ0FBZ0MsNEJBQTRCLGdCQUFnQiw4S0FBOEssaUJBQWlCLGdHQUFnRyx3RkFBd0Ysa09BQWtPLGNBQWMsMkZBQTJGLDBFQUEwRSxJQUFJLDZEQUE2RCxJQUFJLGFBQWEsa0JBQWtCLHdGQUF3Riw0QkFBNEIsNkZBQTZGLDREQUE0RCx3S0FBd0ssMkZBQTJGLElBQUksYUFBYSxTQUFTLHlFQUF5RSxJQUFJLGVBQWUsU0FBUyxnQ0FBZ0MscU5BQXFOLG1CQUFtQixvS0FBb0ssdUNBQXVDLG9EQUFvRCx5QkFBeUIsRUFBRSxvQkFBb0IsSUFBSSx1REFBdUQscUJBQXFCLHVF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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixlQUFlO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcEZhOztBQUViLGlDQUFpQyxtQkFBTyxDQUFDLDBEQUFVO0FBQ25ELHFDQUFxQyxtQkFBTyxDQUFDLDBEQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSHZEO0FBQ0E7O0FBSUEsU0FBU0MsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDdkIsc0JBQU8scUVBQUMsc0VBQUQ7QUFBWSxXQUFPLEVBQUVBLEtBQUssQ0FBQ0M7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0tBRlFGLFE7QUErQlQ7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWVBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjlhYjlmMGFhMGM4MzI4Mjg3ODlhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdCxlPSh0PXJlcXVpcmUoXCJxdWVyeXN0cmluZ1wiKSkmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZcImRlZmF1bHRcImluIHQ/dC5kZWZhdWx0OnQsbz0vaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS87ZnVuY3Rpb24gcih0KXtcInN0cmluZ1wiPT10eXBlb2YgdCYmKHQ9ZCh0KSk7dmFyIHI9ZnVuY3Rpb24odCxlLG8pe3ZhciByPXQuYXV0aCxhPXQuaG9zdG5hbWUscz10LnByb3RvY29sfHxcIlwiLHA9dC5wYXRobmFtZXx8XCJcIixuPXQuaGFzaHx8XCJcIixjPXQucXVlcnl8fFwiXCIsaD0hMTtyPXI/ZW5jb2RlVVJJQ29tcG9uZW50KHIpLnJlcGxhY2UoLyUzQS9pLFwiOlwiKStcIkBcIjpcIlwiLHQuaG9zdD9oPXIrdC5ob3N0OmEmJihoPXIrKH5hLmluZGV4T2YoXCI6XCIpP1wiW1wiK2ErXCJdXCI6YSksdC5wb3J0JiYoaCs9XCI6XCIrdC5wb3J0KSksYyYmXCJvYmplY3RcIj09dHlwZW9mIGMmJihjPWUuZW5jb2RlKGMpKTt2YXIgbD10LnNlYXJjaHx8YyYmXCI/XCIrY3x8XCJcIjtyZXR1cm4gcyYmXCI6XCIhPT1zLnN1YnN0cigtMSkmJihzKz1cIjpcIiksdC5zbGFzaGVzfHwoIXN8fG8udGVzdChzKSkmJiExIT09aD8oaD1cIi8vXCIrKGh8fFwiXCIpLHAmJlwiL1wiIT09cFswXSYmKHA9XCIvXCIrcCkpOmh8fChoPVwiXCIpLG4mJlwiI1wiIT09blswXSYmKG49XCIjXCIrbiksbCYmXCI/XCIhPT1sWzBdJiYobD1cIj9cIitsKSx7cHJvdG9jb2w6cyxob3N0OmgscGF0aG5hbWU6cD1wLnJlcGxhY2UoL1s/I10vZyxlbmNvZGVVUklDb21wb25lbnQpLHNlYXJjaDpsPWwucmVwbGFjZShcIiNcIixcIiUyM1wiKSxoYXNoOm59fSh0LGUsbyk7cmV0dXJuXCJcIityLnByb3RvY29sK3IuaG9zdCtyLnBhdGhuYW1lK3Iuc2VhcmNoK3IuaGFzaH12YXIgYT1cImh0dHA6Ly9cIixzPVwidy53XCIscD1hK3Msbj0vXihbYS16MC05ListXSo6XFwvXFwvXFwvKShbYS16MC05ListXTpcXC8qKT8vaSxjPS9odHRwcz98ZnRwfGdvcGhlcnxmaWxlLztmdW5jdGlvbiBoKHQsZSl7dmFyIG89XCJzdHJpbmdcIj09dHlwZW9mIHQ/ZCh0KTp0O3Q9XCJvYmplY3RcIj09dHlwZW9mIHQ/cih0KTp0O3ZhciBzPWQoZSksaD1cIlwiO28ucHJvdG9jb2wmJiFvLnNsYXNoZXMmJihoPW8ucHJvdG9jb2wsdD10LnJlcGxhY2Uoby5wcm90b2NvbCxcIlwiKSxoKz1cIi9cIj09PWVbMF18fFwiL1wiPT09dFswXT9cIi9cIjpcIlwiKSxoJiZzLnByb3RvY29sJiYoaD1cIlwiLHMuc2xhc2hlc3x8KGg9cy5wcm90b2NvbCxlPWUucmVwbGFjZShzLnByb3RvY29sLFwiXCIpKSk7dmFyIGw9dC5tYXRjaChuKTtsJiYhcy5wcm90b2NvbCYmKHQ9dC5zdWJzdHIoKGg9bFsxXSsobFsyXXx8XCJcIikpLmxlbmd0aCksL15cXC9cXC9bXi9dLy50ZXN0KGUpJiYoaD1oLnNsaWNlKDAsLTEpKSk7dmFyIGk9bmV3IFVSTCh0LHArXCIvXCIpLHU9bmV3IFVSTChlLGkpLnRvU3RyaW5nKCkucmVwbGFjZShwLFwiXCIpLGY9cy5wcm90b2NvbHx8by5wcm90b2NvbDtyZXR1cm4gZis9by5zbGFzaGVzfHxzLnNsYXNoZXM/XCIvL1wiOlwiXCIsIWgmJmY/dT11LnJlcGxhY2UoYSxmKTpoJiYodT11LnJlcGxhY2UoYSxcIlwiKSksYy50ZXN0KHUpfHx+ZS5pbmRleE9mKFwiLlwiKXx8XCIvXCI9PT10LnNsaWNlKC0xKXx8XCIvXCI9PT1lLnNsaWNlKC0xKXx8XCIvXCIhPT11LnNsaWNlKC0xKXx8KHU9dS5zbGljZSgwLC0xKSksaCYmKHU9aCsoXCIvXCI9PT11WzBdP3Uuc3Vic3RyKDEpOnUpKSx1fWZ1bmN0aW9uIGwoKXt9bC5wcm90b3R5cGUucGFyc2U9ZCxsLnByb3RvdHlwZS5mb3JtYXQ9cixsLnByb3RvdHlwZS5yZXNvbHZlPWgsbC5wcm90b3R5cGUucmVzb2x2ZU9iamVjdD1oO3ZhciBpPS9eaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS8sdT0vXiguKj8pKFsjP10uKikvLGY9L14oW2EtejAtOS4rLV0qOikoXFwvezAsM30pKC4qKS9pLG09L14oW2EtejAtOS4rLV0qOik/XFwvXFwvXFwvKi9pLHY9L14oW2EtejAtOS4rLV0qOikoXFwvezAsMn0pXFxbKC4qKVxcXSQvaTtmdW5jdGlvbiBkKHQsbyxhKXtpZih2b2lkIDA9PT1vJiYobz0hMSksdm9pZCAwPT09YSYmKGE9ITEpLHQmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0IGluc3RhbmNlb2YgbClyZXR1cm4gdDt2YXIgbj0odD10LnRyaW0oKSkubWF0Y2godSk7dD1uP25bMV0ucmVwbGFjZSgvXFxcXC9nLFwiL1wiKStuWzJdOnQucmVwbGFjZSgvXFxcXC9nLFwiL1wiKSx2LnRlc3QodCkmJlwiL1wiIT09dC5zbGljZSgtMSkmJih0Kz1cIi9cIik7dmFyIGM9IS8oXmphdmFzY3JpcHQpLy50ZXN0KHQpJiZ0Lm1hdGNoKGYpLGg9bS50ZXN0KHQpLGQ9XCJcIjtjJiYoaS50ZXN0KGNbMV0pfHwoZD1jWzFdLnRvTG93ZXJDYXNlKCksdD1cIlwiK2NbMl0rY1szXSksY1syXXx8KGg9ITEsaS50ZXN0KGNbMV0pPyhkPWNbMV0sdD1cIlwiK2NbM10pOnQ9XCIvL1wiK2NbM10pLDMhPT1jWzJdLmxlbmd0aCYmMSE9PWNbMl0ubGVuZ3RofHwoZD1jWzFdLHQ9XCIvXCIrY1szXSkpO3ZhciBnLHk9KG4/blsxXTp0KS5tYXRjaCgvXmh0dHBzPzpcXC9cXC9bXi9dKyg6WzAtOV0rKSg/PVxcL3wkKS8pLGI9eSYmeVsxXSxDPW5ldyBsLFU9XCJcIixqPVwiXCI7dHJ5e2c9bmV3IFVSTCh0KX1jYXRjaChlKXtVPWUsZHx8YXx8IS9eXFwvXFwvLy50ZXN0KHQpfHwvXlxcL1xcLy4rW0AuXS8udGVzdCh0KXx8KGo9XCIvXCIsdD10LnN1YnN0cigxKSk7dHJ5e2c9bmV3IFVSTCh0LHApfWNhdGNoKHQpe3JldHVybiBDLnByb3RvY29sPWQsQy5ocmVmPWQsQ319Qy5zbGFzaGVzPWgmJiFqLEMuaG9zdD1nLmhvc3Q9PT1zP1wiXCI6Zy5ob3N0LEMuaG9zdG5hbWU9Zy5ob3N0bmFtZT09PXM/XCJcIjpnLmhvc3RuYW1lLnJlcGxhY2UoLyhcXFt8XFxdKS9nLFwiXCIpLEMucHJvdG9jb2w9VT9kfHxudWxsOmcucHJvdG9jb2wsQy5zZWFyY2g9Zy5zZWFyY2gucmVwbGFjZSgvXFxcXC9nLFwiJTVDXCIpLEMuaGFzaD1nLmhhc2gucmVwbGFjZSgvXFxcXC9nLFwiJTVDXCIpO3ZhciB3PXQuc3BsaXQoXCIjXCIpOyFDLnNlYXJjaCYmfndbMF0uaW5kZXhPZihcIj9cIikmJihDLnNlYXJjaD1cIj9cIiksQy5oYXNofHxcIlwiIT09d1sxXXx8KEMuaGFzaD1cIiNcIiksQy5xdWVyeT1vP2UuZGVjb2RlKGcuc2VhcmNoLnN1YnN0cigxKSk6Qy5zZWFyY2guc3Vic3RyKDEpLEMucGF0aG5hbWU9aisoYz9mdW5jdGlvbih0KXtyZXR1cm4gdC5yZXBsYWNlKC9bJ158YF0vZyxmdW5jdGlvbih0KXtyZXR1cm5cIiVcIit0LmNoYXJDb2RlQXQoKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKX0pLnJlcGxhY2UoLygoPzolWzAtOUEtRl17Mn0pKykvZyxmdW5jdGlvbih0LGUpe3RyeXtyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGUpLnNwbGl0KFwiXCIpLm1hcChmdW5jdGlvbih0KXt2YXIgZT10LmNoYXJDb2RlQXQoKTtyZXR1cm4gZT4yNTZ8fC9eW2EtejAtOV0kL2kudGVzdCh0KT90OlwiJVwiK2UudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCl9KS5qb2luKFwiXCIpfWNhdGNoKHQpe3JldHVybiBlfX0pfShnLnBhdGhuYW1lKTpnLnBhdGhuYW1lKSxcImFib3V0OlwiPT09Qy5wcm90b2NvbCYmXCJibGFua1wiPT09Qy5wYXRobmFtZSYmKEMucHJvdG9jb2w9XCJcIixDLnBhdGhuYW1lPVwiXCIpLFUmJlwiL1wiIT09dFswXSYmKEMucGF0aG5hbWU9Qy5wYXRobmFtZS5zdWJzdHIoMSkpLGQmJiFpLnRlc3QoZCkmJlwiL1wiIT09dC5zbGljZSgtMSkmJlwiL1wiPT09Qy5wYXRobmFtZSYmKEMucGF0aG5hbWU9XCJcIiksQy5wYXRoPUMucGF0aG5hbWUrQy5zZWFyY2gsQy5hdXRoPVtnLnVzZXJuYW1lLGcucGFzc3dvcmRdLm1hcChkZWNvZGVVUklDb21wb25lbnQpLmZpbHRlcihCb29sZWFuKS5qb2luKFwiOlwiKSxDLnBvcnQ9Zy5wb3J0LGImJiFDLmhvc3QuZW5kc1dpdGgoYikmJihDLmhvc3QrPWIsQy5wb3J0PWIuc2xpY2UoMSkpLEMuaHJlZj1qP1wiXCIrQy5wYXRobmFtZStDLnNlYXJjaCtDLmhhc2g6cihDKTt2YXIgeD0vXihmaWxlKS8udGVzdChDLmhyZWYpP1tcImhvc3RcIixcImhvc3RuYW1lXCJdOltdO3JldHVybiBPYmplY3Qua2V5cyhDKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe354LmluZGV4T2YodCl8fChDW3RdPUNbdF18fG51bGwpfSksQ31leHBvcnRzLnBhcnNlPWQsZXhwb3J0cy5mb3JtYXQ9cixleHBvcnRzLnJlc29sdmU9aCxleHBvcnRzLnJlc29sdmVPYmplY3Q9ZnVuY3Rpb24odCxlKXtyZXR1cm4gZChoKHQsZSkpfSxleHBvcnRzLlVybD1sO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iLCJtb2R1bGUuZXhwb3J0cz0oKCk9PntcInVzZSBzdHJpY3RcIjt2YXIgZT17ODEzOmU9Pntjb25zdCByPS9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2c7ZS5leHBvcnRzPShlPT57aWYodHlwZW9mIGUhPT1cInN0cmluZ1wiKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYSBzdHJpbmdcIil9cmV0dXJuIGUucmVwbGFjZShyLFwiXFxcXCQmXCIpfSl9fTt2YXIgcj17fTtmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKHQpe2lmKHJbdF0pe3JldHVybiByW3RdLmV4cG9ydHN9dmFyIF89clt0XT17ZXhwb3J0czp7fX07dmFyIGE9dHJ1ZTt0cnl7ZVt0XShfLF8uZXhwb3J0cyxfX25jY3dwY2tfcmVxdWlyZV9fKTthPWZhbHNlfWZpbmFsbHl7aWYoYSlkZWxldGUgclt0XX1yZXR1cm4gXy5leHBvcnRzfV9fbmNjd3Bja19yZXF1aXJlX18uYWI9X19kaXJuYW1lK1wiL1wiO3JldHVybiBfX25jY3dwY2tfcmVxdWlyZV9fKDgxMyl9KSgpOyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldFJlZGlyZWN0U3RhdHVzPWdldFJlZGlyZWN0U3RhdHVzO2V4cG9ydHMubm9ybWFsaXplUm91dGVSZWdleD1ub3JtYWxpemVSb3V0ZVJlZ2V4O2V4cG9ydHMuZGVmYXVsdD1sb2FkQ3VzdG9tUm91dGVzO2V4cG9ydHMuYWxsb3dlZFN0YXR1c0NvZGVzPXZvaWQgMDt2YXIgX3VybD1yZXF1aXJlKFwidXJsXCIpO3ZhciBwYXRoVG9SZWdleHA9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIm5leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cFwiKSk7dmFyIF9lc2NhcGVTdHJpbmdSZWdleHA9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibmV4dC9kaXN0L2NvbXBpbGVkL2VzY2FwZS1zdHJpbmctcmVnZXhwXCIpKTt2YXIgX2NvbnN0YW50cz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL2NvbnN0YW50c1wiKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fWZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpe2lmKHR5cGVvZiBXZWFrTWFwIT09XCJmdW5jdGlvblwiKXJldHVybiBudWxsO3ZhciBjYWNoZT1uZXcgV2Vha01hcCgpO19nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZT1mdW5jdGlvbigpe3JldHVybiBjYWNoZTt9O3JldHVybiBjYWNoZTt9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKXtpZihvYmomJm9iai5fX2VzTW9kdWxlKXtyZXR1cm4gb2JqO31pZihvYmo9PT1udWxsfHx0eXBlb2Ygb2JqIT09XCJvYmplY3RcIiYmdHlwZW9mIG9iaiE9PVwiZnVuY3Rpb25cIil7cmV0dXJue2RlZmF1bHQ6b2JqfTt9dmFyIGNhY2hlPV9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO2lmKGNhY2hlJiZjYWNoZS5oYXMob2JqKSl7cmV0dXJuIGNhY2hlLmdldChvYmopO312YXIgbmV3T2JqPXt9O3ZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3I9T2JqZWN0LmRlZmluZVByb3BlcnR5JiZPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2Zvcih2YXIga2V5IGluIG9iail7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaixrZXkpKXt2YXIgZGVzYz1oYXNQcm9wZXJ0eURlc2NyaXB0b3I/T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosa2V5KTpudWxsO2lmKGRlc2MmJihkZXNjLmdldHx8ZGVzYy5zZXQpKXtPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLGtleSxkZXNjKTt9ZWxzZXtuZXdPYmpba2V5XT1vYmpba2V5XTt9fX1uZXdPYmouZGVmYXVsdD1vYmo7aWYoY2FjaGUpe2NhY2hlLnNldChvYmosbmV3T2JqKTt9cmV0dXJuIG5ld09iajt9Y29uc3QgYWxsb3dlZFN0YXR1c0NvZGVzPW5ldyBTZXQoWzMwMSwzMDIsMzAzLDMwNywzMDhdKTtleHBvcnRzLmFsbG93ZWRTdGF0dXNDb2Rlcz1hbGxvd2VkU3RhdHVzQ29kZXM7ZnVuY3Rpb24gZ2V0UmVkaXJlY3RTdGF0dXMocm91dGUpe3JldHVybiByb3V0ZS5zdGF0dXNDb2RlfHwocm91dGUucGVybWFuZW50P19jb25zdGFudHMuUEVSTUFORU5UX1JFRElSRUNUX1NUQVRVUzpfY29uc3RhbnRzLlRFTVBPUkFSWV9SRURJUkVDVF9TVEFUVVMpO31mdW5jdGlvbiBub3JtYWxpemVSb3V0ZVJlZ2V4KHJlZ2V4KXsvLyBjbGVhbiB1cCB1bi1uZWNlc3NhcnkgZXNjYXBpbmcgZnJvbSByZWdleC5zb3VyY2Ugd2hpY2ggdHVybnMgLyBpbnRvIFxcXFwvXG5yZXR1cm4gcmVnZXgucmVwbGFjZSgvXFxcXFxcLy9nLCcvJyk7fWZ1bmN0aW9uIGNoZWNrUmVkaXJlY3Qocm91dGUpe2NvbnN0IGludmFsaWRQYXJ0cz1bXTtsZXQgaGFkSW52YWxpZFN0YXR1cz1mYWxzZTtpZihyb3V0ZS5zdGF0dXNDb2RlJiYhYWxsb3dlZFN0YXR1c0NvZGVzLmhhcyhyb3V0ZS5zdGF0dXNDb2RlKSl7aGFkSW52YWxpZFN0YXR1cz10cnVlO2ludmFsaWRQYXJ0cy5wdXNoKGBcXGBzdGF0dXNDb2RlXFxgIGlzIG5vdCB1bmRlZmluZWQgb3IgdmFsaWQgc3RhdHVzQ29kZWApO31pZih0eXBlb2Ygcm91dGUucGVybWFuZW50IT09J2Jvb2xlYW4nJiYhcm91dGUuc3RhdHVzQ29kZSl7aW52YWxpZFBhcnRzLnB1c2goYFxcYHBlcm1hbmVudFxcYCBpcyBub3Qgc2V0IHRvIFxcYHRydWVcXGAgb3IgXFxgZmFsc2VcXGBgKTt9cmV0dXJue2ludmFsaWRQYXJ0cyxoYWRJbnZhbGlkU3RhdHVzfTt9ZnVuY3Rpb24gY2hlY2tIZWFkZXIocm91dGUpe2NvbnN0IGludmFsaWRQYXJ0cz1bXTtpZighQXJyYXkuaXNBcnJheShyb3V0ZS5oZWFkZXJzKSl7aW52YWxpZFBhcnRzLnB1c2goJ2BoZWFkZXJzYCBmaWVsZCBtdXN0IGJlIGFuIGFycmF5Jyk7fWVsc2V7Zm9yKGNvbnN0IGhlYWRlciBvZiByb3V0ZS5oZWFkZXJzKXtpZighaGVhZGVyfHx0eXBlb2YgaGVhZGVyIT09J29iamVjdCcpe2ludmFsaWRQYXJ0cy5wdXNoKFwiYGhlYWRlcnNgIGl0ZW1zIG11c3QgYmUgb2JqZWN0IHdpdGggeyBrZXk6ICcnLCB2YWx1ZTogJycgfVwiKTticmVhazt9aWYodHlwZW9mIGhlYWRlci5rZXkhPT0nc3RyaW5nJyl7aW52YWxpZFBhcnRzLnB1c2goJ2BrZXlgIGluIGhlYWRlciBpdGVtIG11c3QgYmUgc3RyaW5nJyk7YnJlYWs7fWlmKHR5cGVvZiBoZWFkZXIudmFsdWUhPT0nc3RyaW5nJyl7aW52YWxpZFBhcnRzLnB1c2goJ2B2YWx1ZWAgaW4gaGVhZGVyIGl0ZW0gbXVzdCBiZSBzdHJpbmcnKTticmVhazt9fX1yZXR1cm4gaW52YWxpZFBhcnRzO31mdW5jdGlvbiB0cnlQYXJzZVBhdGgocm91dGUsaGFuZGxlVXJsKXtjb25zdCByZXN1bHQ9e307bGV0IHJvdXRlUGF0aD1yb3V0ZTt0cnl7aWYoaGFuZGxlVXJsKXtjb25zdCBwYXJzZWREZXN0aW5hdGlvbj0oMCxfdXJsLnBhcnNlKShyb3V0ZSx0cnVlKTtyb3V0ZVBhdGg9YCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWV9JHtwYXJzZWREZXN0aW5hdGlvbi5oYXNofHwnJ31gO30vLyBNYWtlIHN1cmUgd2UgY2FuIHBhcnNlIHRoZSBzb3VyY2UgcHJvcGVybHlcbnJlc3VsdC50b2tlbnM9cGF0aFRvUmVnZXhwLnBhcnNlKHJvdXRlUGF0aCk7cGF0aFRvUmVnZXhwLnRva2Vuc1RvUmVnZXhwKHJlc3VsdC50b2tlbnMpO31jYXRjaChlcnIpey8vIElmIHRoZXJlIGlzIGFuIGVycm9yIHNob3cgb3VyIGVyci5zaCBidXQgc3RpbGwgc2hvdyBvcmlnaW5hbCBlcnJvciBvciBhIGZvcm1hdHRlZCBvbmUgaWYgd2UgY2FuXG5jb25zdCBlcnJNYXRjaGVzPWVyci5tZXNzYWdlLm1hdGNoKC9hdCAoXFxkezAsfSkvKTtpZihlcnJNYXRjaGVzKXtjb25zdCBwb3NpdGlvbj1wYXJzZUludChlcnJNYXRjaGVzWzFdLDEwKTtjb25zb2xlLmVycm9yKGBcXG5FcnJvciBwYXJzaW5nIFxcYCR7cm91dGV9XFxgIGArYGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtcm91dGUtc291cmNlXFxuYCtgUmVhc29uOiAke2Vyci5tZXNzYWdlfVxcblxcbmArYCAgJHtyb3V0ZVBhdGh9XFxuYCtgICAke25ldyBBcnJheShwb3NpdGlvbikuZmlsbCgnICcpLmpvaW4oJycpfV5cXG5gKTt9ZWxzZXtjb25zb2xlLmVycm9yKGBcXG5FcnJvciBwYXJzaW5nICR7cm91dGV9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtcm91dGUtc291cmNlYCxlcnIpO31yZXN1bHQuZXJyb3I9dHJ1ZTt9cmV0dXJuIHJlc3VsdDt9ZnVuY3Rpb24gY2hlY2tDdXN0b21Sb3V0ZXMocm91dGVzLHR5cGUpe2lmKCFBcnJheS5pc0FycmF5KHJvdXRlcykpe3Rocm93IG5ldyBFcnJvcihgJHt0eXBlfXMgbXVzdCByZXR1cm4gYW4gYXJyYXksIHJlY2VpdmVkICR7dHlwZW9mIHJvdXRlc30uXFxuYCtgU2VlIGhlcmUgZm9yIG1vcmUgaW5mbzogaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9yb3V0ZXMtbXVzdC1iZS1hcnJheWApO31sZXQgbnVtSW52YWxpZFJvdXRlcz0wO2xldCBoYWRJbnZhbGlkU3RhdHVzPWZhbHNlO2NvbnN0IGlzUmVkaXJlY3Q9dHlwZT09PSdyZWRpcmVjdCc7bGV0IGFsbG93ZWRLZXlzO2lmKHR5cGU9PT0ncmV3cml0ZSd8fGlzUmVkaXJlY3Qpe2FsbG93ZWRLZXlzPW5ldyBTZXQoWydzb3VyY2UnLCdkZXN0aW5hdGlvbicsJ2Jhc2VQYXRoJywnbG9jYWxlJywuLi4oaXNSZWRpcmVjdD9bJ3N0YXR1c0NvZGUnLCdwZXJtYW5lbnQnXTpbXSldKTt9ZWxzZXthbGxvd2VkS2V5cz1uZXcgU2V0KFsnc291cmNlJywnaGVhZGVycycsJ2Jhc2VQYXRoJywnbG9jYWxlJ10pO31mb3IoY29uc3Qgcm91dGUgb2Ygcm91dGVzKXtpZighcm91dGV8fHR5cGVvZiByb3V0ZSE9PSdvYmplY3QnKXtjb25zb2xlLmVycm9yKGBUaGUgcm91dGUgJHtKU09OLnN0cmluZ2lmeShyb3V0ZSl9IGlzIG5vdCBhIHZhbGlkIG9iamVjdCB3aXRoIFxcYHNvdXJjZVxcYCBhbmQgXFxgJHt0eXBlPT09J2hlYWRlcic/J2hlYWRlcnMnOidkZXN0aW5hdGlvbid9XFxgYCk7bnVtSW52YWxpZFJvdXRlcysrO2NvbnRpbnVlO31pZih0eXBlPT09J3Jld3JpdGUnJiZyb3V0ZS5iYXNlUGF0aD09PWZhbHNlJiYhKHJvdXRlLmRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJ2h0dHA6Ly8nKXx8cm91dGUuZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnaHR0cHM6Ly8nKSkpe2NvbnNvbGUuZXJyb3IoYFRoZSByb3V0ZSAke3JvdXRlLnNvdXJjZX0gcmV3cml0ZXMgdXJscyBvdXRzaWRlIG9mIHRoZSBiYXNlUGF0aC4gUGxlYXNlIHVzZSBhIGRlc3RpbmF0aW9uIHRoYXQgc3RhcnRzIHdpdGggXFxgaHR0cDovL1xcYCBvciBcXGBodHRwczovL1xcYCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWV4dGVybmFsLXJld3JpdGUubWRgKTtudW1JbnZhbGlkUm91dGVzKys7Y29udGludWU7fWNvbnN0IGtleXM9T2JqZWN0LmtleXMocm91dGUpO2NvbnN0IGludmFsaWRLZXlzPWtleXMuZmlsdGVyKGtleT0+IWFsbG93ZWRLZXlzLmhhcyhrZXkpKTtjb25zdCBpbnZhbGlkUGFydHM9W107aWYodHlwZW9mIHJvdXRlLmJhc2VQYXRoIT09J3VuZGVmaW5lZCcmJnJvdXRlLmJhc2VQYXRoIT09ZmFsc2Upe2ludmFsaWRQYXJ0cy5wdXNoKCdgYmFzZVBhdGhgIG11c3QgYmUgdW5kZWZpbmVkIG9yIGZhbHNlJyk7fWlmKHR5cGVvZiByb3V0ZS5sb2NhbGUhPT0ndW5kZWZpbmVkJyYmcm91dGUubG9jYWxlIT09ZmFsc2Upe2ludmFsaWRQYXJ0cy5wdXNoKCdgbG9jYWxlYCBtdXN0IGJlIHVuZGVmaW5lZCBvciBmYWxzZScpO31pZighcm91dGUuc291cmNlKXtpbnZhbGlkUGFydHMucHVzaCgnYHNvdXJjZWAgaXMgbWlzc2luZycpO31lbHNlIGlmKHR5cGVvZiByb3V0ZS5zb3VyY2UhPT0nc3RyaW5nJyl7aW52YWxpZFBhcnRzLnB1c2goJ2Bzb3VyY2VgIGlzIG5vdCBhIHN0cmluZycpO31lbHNlIGlmKCFyb3V0ZS5zb3VyY2Uuc3RhcnRzV2l0aCgnLycpKXtpbnZhbGlkUGFydHMucHVzaCgnYHNvdXJjZWAgZG9lcyBub3Qgc3RhcnQgd2l0aCAvJyk7fWlmKHR5cGU9PT0naGVhZGVyJyl7aW52YWxpZFBhcnRzLnB1c2goLi4uY2hlY2tIZWFkZXIocm91dGUpKTt9ZWxzZXtsZXQgX3JvdXRlPXJvdXRlO2lmKCFfcm91dGUuZGVzdGluYXRpb24pe2ludmFsaWRQYXJ0cy5wdXNoKCdgZGVzdGluYXRpb25gIGlzIG1pc3NpbmcnKTt9ZWxzZSBpZih0eXBlb2YgX3JvdXRlLmRlc3RpbmF0aW9uIT09J3N0cmluZycpe2ludmFsaWRQYXJ0cy5wdXNoKCdgZGVzdGluYXRpb25gIGlzIG5vdCBhIHN0cmluZycpO31lbHNlIGlmKHR5cGU9PT0ncmV3cml0ZScmJiFfcm91dGUuZGVzdGluYXRpb24ubWF0Y2goL14oXFwvfGh0dHBzOlxcL1xcL3xodHRwOlxcL1xcLykvKSl7aW52YWxpZFBhcnRzLnB1c2goJ2BkZXN0aW5hdGlvbmAgZG9lcyBub3Qgc3RhcnQgd2l0aCBgL2AsIGBodHRwOi8vYCwgb3IgYGh0dHBzOi8vYCcpO319aWYodHlwZT09PSdyZWRpcmVjdCcpe2NvbnN0IHJlc3VsdD1jaGVja1JlZGlyZWN0KHJvdXRlKTtoYWRJbnZhbGlkU3RhdHVzPWhhZEludmFsaWRTdGF0dXN8fHJlc3VsdC5oYWRJbnZhbGlkU3RhdHVzO2ludmFsaWRQYXJ0cy5wdXNoKC4uLnJlc3VsdC5pbnZhbGlkUGFydHMpO31sZXQgc291cmNlVG9rZW5zO2lmKHR5cGVvZiByb3V0ZS5zb3VyY2U9PT0nc3RyaW5nJyYmcm91dGUuc291cmNlLnN0YXJ0c1dpdGgoJy8nKSl7Ly8gb25seSBzaG93IHBhcnNlIGVycm9yIGlmIHdlIGRpZG4ndCBhbHJlYWR5IHNob3cgZXJyb3Jcbi8vIGZvciBub3QgYmVpbmcgYSBzdHJpbmdcbmNvbnN0e3Rva2VucyxlcnJvcn09dHJ5UGFyc2VQYXRoKHJvdXRlLnNvdXJjZSk7aWYoZXJyb3Ipe2ludmFsaWRQYXJ0cy5wdXNoKCdgc291cmNlYCBwYXJzZSBmYWlsZWQnKTt9c291cmNlVG9rZW5zPXRva2Vuczt9Ly8gbWFrZSBzdXJlIG5vIHVubmFtZWQgcGF0dGVybnMgYXJlIGF0dGVtcHRlZCB0byBiZSB1c2VkIGluIHRoZVxuLy8gZGVzdGluYXRpb24gYXMgdGhpcyBjYW4gY2F1c2UgY29uZnVzaW9uIGFuZCBpcyBub3QgYWxsb3dlZFxuaWYodHlwZW9mIHJvdXRlLmRlc3RpbmF0aW9uPT09J3N0cmluZycpe2lmKHJvdXRlLmRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSYmQXJyYXkuaXNBcnJheShzb3VyY2VUb2tlbnMpKXtjb25zdCB1bm5hbWVkSW5EZXN0PW5ldyBTZXQoKTtmb3IoY29uc3QgdG9rZW4gb2Ygc291cmNlVG9rZW5zKXtpZih0eXBlb2YgdG9rZW49PT0nb2JqZWN0JyYmdHlwZW9mIHRva2VuLm5hbWU9PT0nbnVtYmVyJyl7Y29uc3QgdW5uYW1lZEluZGV4PW5ldyBSZWdFeHAoYDoke3Rva2VuLm5hbWV9KD8hXFxcXGQpYCk7aWYocm91dGUuZGVzdGluYXRpb24ubWF0Y2godW5uYW1lZEluZGV4KSl7dW5uYW1lZEluRGVzdC5hZGQoYDoke3Rva2VuLm5hbWV9YCk7fX19aWYodW5uYW1lZEluRGVzdC5zaXplPjApe2ludmFsaWRQYXJ0cy5wdXNoKGBcXGBkZXN0aW5hdGlvblxcYCBoYXMgdW5uYW1lZCBwYXJhbXMgJHtbLi4udW5uYW1lZEluRGVzdF0uam9pbignLCAnKX1gKTt9ZWxzZXtjb25zdHt0b2tlbnM6ZGVzdFRva2VucyxlcnJvcjpkZXN0aW5hdGlvblBhcnNlRmFpbGVkfT10cnlQYXJzZVBhdGgocm91dGUuZGVzdGluYXRpb24sdHJ1ZSk7aWYoZGVzdGluYXRpb25QYXJzZUZhaWxlZCl7aW52YWxpZFBhcnRzLnB1c2goJ2BkZXN0aW5hdGlvbmAgcGFyc2UgZmFpbGVkJyk7fWVsc2V7Y29uc3Qgc291cmNlU2VnbWVudHM9bmV3IFNldChzb3VyY2VUb2tlbnMubWFwKGl0ZW09PnR5cGVvZiBpdGVtPT09J29iamVjdCcmJml0ZW0ubmFtZSkuZmlsdGVyKEJvb2xlYW4pKTtjb25zdCBpbnZhbGlkRGVzdFNlZ21lbnRzPW5ldyBTZXQoKTtmb3IoY29uc3QgdG9rZW4gb2YgZGVzdFRva2Vucyl7aWYodHlwZW9mIHRva2VuPT09J29iamVjdCcmJiFzb3VyY2VTZWdtZW50cy5oYXModG9rZW4ubmFtZSkpe2ludmFsaWREZXN0U2VnbWVudHMuYWRkKHRva2VuLm5hbWUpO319aWYoaW52YWxpZERlc3RTZWdtZW50cy5zaXplKXtpbnZhbGlkUGFydHMucHVzaChgXFxgZGVzdGluYXRpb25cXGAgaGFzIHNlZ21lbnRzIG5vdCBpbiBcXGBzb3VyY2VcXGAgKCR7Wy4uLmludmFsaWREZXN0U2VnbWVudHNdLmpvaW4oJywgJyl9KWApO319fX19Y29uc3QgaGFzSW52YWxpZEtleXM9aW52YWxpZEtleXMubGVuZ3RoPjA7Y29uc3QgaGFzSW52YWxpZFBhcnRzPWludmFsaWRQYXJ0cy5sZW5ndGg+MDtpZihoYXNJbnZhbGlkS2V5c3x8aGFzSW52YWxpZFBhcnRzKXtjb25zb2xlLmVycm9yKGAke2ludmFsaWRQYXJ0cy5qb2luKCcsICcpfSR7aW52YWxpZEtleXMubGVuZ3RoPyhoYXNJbnZhbGlkUGFydHM/JywnOicnKStgIGludmFsaWQgZmllbGQke2ludmFsaWRLZXlzLmxlbmd0aD09PTE/Jyc6J3MnfTogYCtpbnZhbGlkS2V5cy5qb2luKCcsJyk6Jyd9IGZvciByb3V0ZSAke0pTT04uc3RyaW5naWZ5KHJvdXRlKX1gKTtudW1JbnZhbGlkUm91dGVzKys7fX1pZihudW1JbnZhbGlkUm91dGVzPjApe2lmKGhhZEludmFsaWRTdGF0dXMpe2NvbnNvbGUuZXJyb3IoYFxcblZhbGlkIHJlZGlyZWN0IHN0YXR1c0NvZGUgdmFsdWVzIGFyZSAke1suLi5hbGxvd2VkU3RhdHVzQ29kZXNdLmpvaW4oJywgJyl9YCk7fWNvbnNvbGUuZXJyb3IoKTt0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgJHt0eXBlfSR7bnVtSW52YWxpZFJvdXRlcz09PTE/Jyc6J3MnfSBmb3VuZGApO319ZnVuY3Rpb24gcHJvY2Vzc1JvdXRlcyhyb3V0ZXMsY29uZmlnLHR5cGUpe2NvbnN0IF9yb3V0ZXM9cm91dGVzO2NvbnN0IG5ld1JvdXRlcz1bXTtjb25zdCBkZWZhdWx0TG9jYWxlcz1bXTtpZihjb25maWcuaTE4biYmdHlwZT09PSdyZWRpcmVjdCcpe2Zvcihjb25zdCBpdGVtIG9mKChfY29uZmlnJGkxOG49Y29uZmlnLmkxOG4pPT1udWxsP3ZvaWQgMDpfY29uZmlnJGkxOG4uZG9tYWlucyl8fFtdKXt2YXIgX2NvbmZpZyRpMThuO2RlZmF1bHRMb2NhbGVzLnB1c2goe2xvY2FsZTppdGVtLmRlZmF1bHRMb2NhbGUsYmFzZTpgaHR0cCR7aXRlbS5odHRwPycnOidzJ306Ly8ke2l0ZW0uZG9tYWlufWB9KTt9ZGVmYXVsdExvY2FsZXMucHVzaCh7bG9jYWxlOmNvbmZpZy5pMThuLmRlZmF1bHRMb2NhbGUsYmFzZTonJ30pO31mb3IoY29uc3QgciBvZiBfcm91dGVzKXt2YXIgX3IkZGVzdGluYXRpb247Y29uc3Qgc3JjQmFzZVBhdGg9Y29uZmlnLmJhc2VQYXRoJiZyLmJhc2VQYXRoIT09ZmFsc2U/Y29uZmlnLmJhc2VQYXRoOicnO2NvbnN0IGlzRXh0ZXJuYWw9ISgoX3IkZGVzdGluYXRpb249ci5kZXN0aW5hdGlvbikhPW51bGwmJl9yJGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSk7Y29uc3QgZGVzdEJhc2VQYXRoPXNyY0Jhc2VQYXRoJiYhaXNFeHRlcm5hbD9zcmNCYXNlUGF0aDonJztpZihjb25maWcuaTE4biYmci5sb2NhbGUhPT1mYWxzZSl7dmFyIF9yJGRlc3RpbmF0aW9uMjtkZWZhdWx0TG9jYWxlcy5mb3JFYWNoKGl0ZW09PntsZXQgZGVzdGluYXRpb247aWYoci5kZXN0aW5hdGlvbil7ZGVzdGluYXRpb249aXRlbS5iYXNlP2Ake2l0ZW0uYmFzZX0ke2Rlc3RCYXNlUGF0aH0ke3IuZGVzdGluYXRpb259YDpgJHtkZXN0QmFzZVBhdGh9JHtyLmRlc3RpbmF0aW9ufWA7fW5ld1JvdXRlcy5wdXNoKHsuLi5yLGRlc3RpbmF0aW9uLHNvdXJjZTpgJHtzcmNCYXNlUGF0aH0vJHtpdGVtLmxvY2FsZX0ke3Iuc291cmNlfWB9KTt9KTtyLnNvdXJjZT1gLzpuZXh0SW50ZXJuYWxMb2NhbGUoJHtjb25maWcuaTE4bi5sb2NhbGVzLm1hcChsb2NhbGU9PigwLF9lc2NhcGVTdHJpbmdSZWdleHAuZGVmYXVsdCkobG9jYWxlKSkuam9pbignfCcpfSkke3Iuc291cmNlPT09Jy8nJiYhY29uZmlnLnRyYWlsaW5nU2xhc2g/Jyc6ci5zb3VyY2V9YDtpZihyLmRlc3RpbmF0aW9uJiYoX3IkZGVzdGluYXRpb24yPXIuZGVzdGluYXRpb24pIT1udWxsJiZfciRkZXN0aW5hdGlvbjIuc3RhcnRzV2l0aCgnLycpKXtyLmRlc3RpbmF0aW9uPWAvOm5leHRJbnRlcm5hbExvY2FsZSR7ci5kZXN0aW5hdGlvbj09PScvJyYmIWNvbmZpZy50cmFpbGluZ1NsYXNoPycnOnIuZGVzdGluYXRpb259YDt9fXIuc291cmNlPWAke3NyY0Jhc2VQYXRofSR7ci5zb3VyY2V9YDtpZihyLmRlc3RpbmF0aW9uKXtyLmRlc3RpbmF0aW9uPWAke2Rlc3RCYXNlUGF0aH0ke3IuZGVzdGluYXRpb259YDt9bmV3Um91dGVzLnB1c2gocik7fXJldHVybiBuZXdSb3V0ZXM7fWFzeW5jIGZ1bmN0aW9uIGxvYWRSZWRpcmVjdHMoY29uZmlnKXtpZih0eXBlb2YgY29uZmlnLnJlZGlyZWN0cyE9PSdmdW5jdGlvbicpe3JldHVybltdO31sZXQgcmVkaXJlY3RzPWF3YWl0IGNvbmZpZy5yZWRpcmVjdHMoKTtjaGVja0N1c3RvbVJvdXRlcyhyZWRpcmVjdHMsJ3JlZGlyZWN0Jyk7cmV0dXJuIHByb2Nlc3NSb3V0ZXMocmVkaXJlY3RzLGNvbmZpZywncmVkaXJlY3QnKTt9YXN5bmMgZnVuY3Rpb24gbG9hZFJld3JpdGVzKGNvbmZpZyl7aWYodHlwZW9mIGNvbmZpZy5yZXdyaXRlcyE9PSdmdW5jdGlvbicpe3JldHVybltdO31sZXQgcmV3cml0ZXM9YXdhaXQgY29uZmlnLnJld3JpdGVzKCk7Y2hlY2tDdXN0b21Sb3V0ZXMocmV3cml0ZXMsJ3Jld3JpdGUnKTtyZXR1cm4gcHJvY2Vzc1JvdXRlcyhyZXdyaXRlcyxjb25maWcsJ3Jld3JpdGUnKTt9YXN5bmMgZnVuY3Rpb24gbG9hZEhlYWRlcnMoY29uZmlnKXtpZih0eXBlb2YgY29uZmlnLmhlYWRlcnMhPT0nZnVuY3Rpb24nKXtyZXR1cm5bXTt9bGV0IGhlYWRlcnM9YXdhaXQgY29uZmlnLmhlYWRlcnMoKTtjaGVja0N1c3RvbVJvdXRlcyhoZWFkZXJzLCdoZWFkZXInKTtyZXR1cm4gcHJvY2Vzc1JvdXRlcyhoZWFkZXJzLGNvbmZpZywnaGVhZGVyJyk7fWFzeW5jIGZ1bmN0aW9uIGxvYWRDdXN0b21Sb3V0ZXMoY29uZmlnKXtjb25zdFtoZWFkZXJzLHJld3JpdGVzLHJlZGlyZWN0c109YXdhaXQgUHJvbWlzZS5hbGwoW2xvYWRIZWFkZXJzKGNvbmZpZyksbG9hZFJld3JpdGVzKGNvbmZpZyksbG9hZFJlZGlyZWN0cyhjb25maWcpXSk7aWYoY29uZmlnLnRyYWlsaW5nU2xhc2gpe3JlZGlyZWN0cy51bnNoaWZ0KHtzb3VyY2U6Jy86ZmlsZSgoPyFcXFxcLndlbGwta25vd24oPzovLiopPykoPzpbXi9dKy8pKlteL10rXFxcXC5cXFxcdyspLycsZGVzdGluYXRpb246Jy86ZmlsZScscGVybWFuZW50OnRydWUsbG9jYWxlOmNvbmZpZy5pMThuP2ZhbHNlOnVuZGVmaW5lZCxpbnRlcm5hbDp0cnVlfSx7c291cmNlOicvOm5vdGZpbGUoKD8hXFxcXC53ZWxsLWtub3duKD86Ly4qKT8pKD86W14vXSsvKSpbXi9cXFxcLl0rKScsZGVzdGluYXRpb246Jy86bm90ZmlsZS8nLHBlcm1hbmVudDp0cnVlLGxvY2FsZTpjb25maWcuaTE4bj9mYWxzZTp1bmRlZmluZWQsaW50ZXJuYWw6dHJ1ZX0pO2lmKGNvbmZpZy5iYXNlUGF0aCl7cmVkaXJlY3RzLnVuc2hpZnQoe3NvdXJjZTpjb25maWcuYmFzZVBhdGgsZGVzdGluYXRpb246Y29uZmlnLmJhc2VQYXRoKycvJyxwZXJtYW5lbnQ6dHJ1ZSxiYXNlUGF0aDpmYWxzZSxsb2NhbGU6Y29uZmlnLmkxOG4/ZmFsc2U6dW5kZWZpbmVkLGludGVybmFsOnRydWV9KTt9fWVsc2V7cmVkaXJlY3RzLnVuc2hpZnQoe3NvdXJjZTonLzpwYXRoKy8nLGRlc3RpbmF0aW9uOicvOnBhdGgrJyxwZXJtYW5lbnQ6dHJ1ZSxsb2NhbGU6Y29uZmlnLmkxOG4/ZmFsc2U6dW5kZWZpbmVkLGludGVybmFsOnRydWV9KTtpZihjb25maWcuYmFzZVBhdGgpe3JlZGlyZWN0cy51bnNoaWZ0KHtzb3VyY2U6Y29uZmlnLmJhc2VQYXRoKycvJyxkZXN0aW5hdGlvbjpjb25maWcuYmFzZVBhdGgscGVybWFuZW50OnRydWUsYmFzZVBhdGg6ZmFsc2UsbG9jYWxlOmNvbmZpZy5pMThuP2ZhbHNlOnVuZGVmaW5lZCxpbnRlcm5hbDp0cnVlfSk7fX1yZXR1cm57aGVhZGVycyxyZXdyaXRlcyxyZWRpcmVjdHN9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxvYWQtY3VzdG9tLXJvdXRlcy5qcy5tYXAiLCJleHBvcnQgY29uc3QgUEhBU0VfRVhQT1JUID0gJ3BoYXNlLWV4cG9ydCdcbmV4cG9ydCBjb25zdCBQSEFTRV9QUk9EVUNUSU9OX0JVSUxEID0gJ3BoYXNlLXByb2R1Y3Rpb24tYnVpbGQnXG5leHBvcnQgY29uc3QgUEhBU0VfUFJPRFVDVElPTl9TRVJWRVIgPSAncGhhc2UtcHJvZHVjdGlvbi1zZXJ2ZXInXG5leHBvcnQgY29uc3QgUEhBU0VfREVWRUxPUE1FTlRfU0VSVkVSID0gJ3BoYXNlLWRldmVsb3BtZW50LXNlcnZlcidcbmV4cG9ydCBjb25zdCBQQUdFU19NQU5JRkVTVCA9ICdwYWdlcy1tYW5pZmVzdC5qc29uJ1xuZXhwb3J0IGNvbnN0IEJVSUxEX01BTklGRVNUID0gJ2J1aWxkLW1hbmlmZXN0Lmpzb24nXG5leHBvcnQgY29uc3QgRVhQT1JUX01BUktFUiA9ICdleHBvcnQtbWFya2VyLmpzb24nXG5leHBvcnQgY29uc3QgRVhQT1JUX0RFVEFJTCA9ICdleHBvcnQtZGV0YWlsLmpzb24nXG5leHBvcnQgY29uc3QgUFJFUkVOREVSX01BTklGRVNUID0gJ3ByZXJlbmRlci1tYW5pZmVzdC5qc29uJ1xuZXhwb3J0IGNvbnN0IFJPVVRFU19NQU5JRkVTVCA9ICdyb3V0ZXMtbWFuaWZlc3QuanNvbidcbmV4cG9ydCBjb25zdCBJTUFHRVNfTUFOSUZFU1QgPSAnaW1hZ2VzLW1hbmlmZXN0Lmpzb24nXG5leHBvcnQgY29uc3QgU0VSVkVSX0ZJTEVTX01BTklGRVNUID0gJ3JlcXVpcmVkLXNlcnZlci1maWxlcy5qc29uJ1xuZXhwb3J0IGNvbnN0IERFVl9DTElFTlRfUEFHRVNfTUFOSUZFU1QgPSAnX2RldlBhZ2VzTWFuaWZlc3QuanNvbidcbmV4cG9ydCBjb25zdCBSRUFDVF9MT0FEQUJMRV9NQU5JRkVTVCA9ICdyZWFjdC1sb2FkYWJsZS1tYW5pZmVzdC5qc29uJ1xuZXhwb3J0IGNvbnN0IEZPTlRfTUFOSUZFU1QgPSAnZm9udC1tYW5pZmVzdC5qc29uJ1xuZXhwb3J0IGNvbnN0IFNFUlZFUl9ESVJFQ1RPUlkgPSAnc2VydmVyJ1xuZXhwb3J0IGNvbnN0IFNFUlZFUkxFU1NfRElSRUNUT1JZID0gJ3NlcnZlcmxlc3MnXG5leHBvcnQgY29uc3QgQ09ORklHX0ZJTEUgPSAnbmV4dC5jb25maWcuanMnXG5leHBvcnQgY29uc3QgQlVJTERfSURfRklMRSA9ICdCVUlMRF9JRCdcbmV4cG9ydCBjb25zdCBCTE9DS0VEX1BBR0VTID0gWycvX2RvY3VtZW50JywgJy9fYXBwJ11cbmV4cG9ydCBjb25zdCBDTElFTlRfUFVCTElDX0ZJTEVTX1BBVEggPSAncHVibGljJ1xuZXhwb3J0IGNvbnN0IENMSUVOVF9TVEFUSUNfRklMRVNfUEFUSCA9ICdzdGF0aWMnXG5leHBvcnQgY29uc3QgQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FID0gJ3J1bnRpbWUnXG5leHBvcnQgY29uc3QgQU1QX1JFTkRFUl9UQVJHRVQgPSAnX19ORVhUX0FNUF9SRU5ERVJfVEFSR0VUX18nXG5leHBvcnQgY29uc3QgU1RSSU5HX0xJVEVSQUxfRFJPUF9CVU5ETEUgPSAnX19ORVhUX0RST1BfQ0xJRU5UX0ZJTEVfXydcbi8vIHN0YXRpYy9ydW50aW1lL21haW4uanNcbmV4cG9ydCBjb25zdCBDTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfTUFJTiA9IGBtYWluYFxuLy8gc3RhdGljL3J1bnRpbWUvcmVhY3QtcmVmcmVzaC5qc1xuZXhwb3J0IGNvbnN0IENMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9SRUFDVF9SRUZSRVNIID0gYHJlYWN0LXJlZnJlc2hgXG4vLyBzdGF0aWMvcnVudGltZS9hbXAuanNcbmV4cG9ydCBjb25zdCBDTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfQU1QID0gYGFtcGBcbi8vIHN0YXRpYy9ydW50aW1lL3dlYnBhY2suanNcbmV4cG9ydCBjb25zdCBDTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfV0VCUEFDSyA9IGB3ZWJwYWNrYFxuLy8gc3RhdGljL3J1bnRpbWUvcG9seWZpbGxzLmpzXG5leHBvcnQgY29uc3QgQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX1BPTFlGSUxMUyA9IGBwb2x5ZmlsbHNgXG5leHBvcnQgY29uc3QgVEVNUE9SQVJZX1JFRElSRUNUX1NUQVRVUyA9IDMwN1xuZXhwb3J0IGNvbnN0IFBFUk1BTkVOVF9SRURJUkVDVF9TVEFUVVMgPSAzMDhcbmV4cG9ydCBjb25zdCBTVEFUSUNfUFJPUFNfSUQgPSAnX19OX1NTRydcbmV4cG9ydCBjb25zdCBTRVJWRVJfUFJPUFNfSUQgPSAnX19OX1NTUCdcbmV4cG9ydCBjb25zdCBPUFRJTUlaRURfRk9OVF9QUk9WSURFUlMgPSBbJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzJ11cbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbi8vIElmIG9iai5oYXNPd25Qcm9wZXJ0eSBoYXMgYmVlbiBvdmVycmlkZGVuLCB0aGVuIGNhbGxpbmdcbi8vIG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSB3aWxsIGJyZWFrLlxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vam95ZW50L25vZGUvaXNzdWVzLzE3MDdcbmZ1bmN0aW9uIGhhc093blByb3BlcnR5KG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocXMsIHNlcCwgZXEsIG9wdGlvbnMpIHtcbiAgc2VwID0gc2VwIHx8ICcmJztcbiAgZXEgPSBlcSB8fCAnPSc7XG4gIHZhciBvYmogPSB7fTtcblxuICBpZiAodHlwZW9mIHFzICE9PSAnc3RyaW5nJyB8fCBxcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgdmFyIHJlZ2V4cCA9IC9cXCsvZztcbiAgcXMgPSBxcy5zcGxpdChzZXApO1xuXG4gIHZhciBtYXhLZXlzID0gMTAwMDtcbiAgaWYgKG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubWF4S2V5cyA9PT0gJ251bWJlcicpIHtcbiAgICBtYXhLZXlzID0gb3B0aW9ucy5tYXhLZXlzO1xuICB9XG5cbiAgdmFyIGxlbiA9IHFzLmxlbmd0aDtcbiAgLy8gbWF4S2V5cyA8PSAwIG1lYW5zIHRoYXQgd2Ugc2hvdWxkIG5vdCBsaW1pdCBrZXlzIGNvdW50XG4gIGlmIChtYXhLZXlzID4gMCAmJiBsZW4gPiBtYXhLZXlzKSB7XG4gICAgbGVuID0gbWF4S2V5cztcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICB2YXIgeCA9IHFzW2ldLnJlcGxhY2UocmVnZXhwLCAnJTIwJyksXG4gICAgICAgIGlkeCA9IHguaW5kZXhPZihlcSksXG4gICAgICAgIGtzdHIsIHZzdHIsIGssIHY7XG5cbiAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgIGtzdHIgPSB4LnN1YnN0cigwLCBpZHgpO1xuICAgICAgdnN0ciA9IHguc3Vic3RyKGlkeCArIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBrc3RyID0geDtcbiAgICAgIHZzdHIgPSAnJztcbiAgICB9XG5cbiAgICBrID0gZGVjb2RlVVJJQ29tcG9uZW50KGtzdHIpO1xuICAgIHYgPSBkZWNvZGVVUklDb21wb25lbnQodnN0cik7XG5cbiAgICBpZiAoIWhhc093blByb3BlcnR5KG9iaiwgaykpIHtcbiAgICAgIG9ialtrXSA9IHY7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KG9ialtrXSkpIHtcbiAgICAgIG9ialtrXS5wdXNoKHYpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmpba10gPSBbb2JqW2tdLCB2XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTtcblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uICh4cykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHhzKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgc3RyaW5naWZ5UHJpbWl0aXZlID0gZnVuY3Rpb24odikge1xuICBzd2l0Y2ggKHR5cGVvZiB2KSB7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIHJldHVybiB2O1xuXG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICByZXR1cm4gdiA/ICd0cnVlJyA6ICdmYWxzZSc7XG5cbiAgICBjYXNlICdudW1iZXInOlxuICAgICAgcmV0dXJuIGlzRmluaXRlKHYpID8gdiA6ICcnO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAnJztcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmosIHNlcCwgZXEsIG5hbWUpIHtcbiAgc2VwID0gc2VwIHx8ICcmJztcbiAgZXEgPSBlcSB8fCAnPSc7XG4gIGlmIChvYmogPT09IG51bGwpIHtcbiAgICBvYmogPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbWFwKG9iamVjdEtleXMob2JqKSwgZnVuY3Rpb24oaykge1xuICAgICAgdmFyIGtzID0gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShrKSkgKyBlcTtcbiAgICAgIGlmIChpc0FycmF5KG9ialtrXSkpIHtcbiAgICAgICAgcmV0dXJuIG1hcChvYmpba10sIGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICByZXR1cm4ga3MgKyBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKHYpKTtcbiAgICAgICAgfSkuam9pbihzZXApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGtzICsgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShvYmpba10pKTtcbiAgICAgIH1cbiAgICB9KS5qb2luKHNlcCk7XG5cbiAgfVxuXG4gIGlmICghbmFtZSkgcmV0dXJuICcnO1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShuYW1lKSkgKyBlcSArXG4gICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKG9iaikpO1xufTtcblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uICh4cykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHhzKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cbmZ1bmN0aW9uIG1hcCAoeHMsIGYpIHtcbiAgaWYgKHhzLm1hcCkgcmV0dXJuIHhzLm1hcChmKTtcbiAgdmFyIHJlcyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgcmVzLnB1c2goZih4c1tpXSwgaSkpO1xuICB9XG4gIHJldHVybiByZXM7XG59XG5cbnZhciBvYmplY3RLZXlzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24gKG9iaikge1xuICB2YXIgcmVzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgcmVzLnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5kZWNvZGUgPSBleHBvcnRzLnBhcnNlID0gcmVxdWlyZSgnLi9kZWNvZGUnKTtcbmV4cG9ydHMuZW5jb2RlID0gZXhwb3J0cy5zdHJpbmdpZnkgPSByZXF1aXJlKCcuL2VuY29kZScpO1xuIiwiaW1wb3J0IE1lZXR1cExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0XCI7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCJuZXh0L2Rpc3QvbGliL2xvYWQtY3VzdG9tLXJvdXRlc1wiO1xyXG5cclxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UocHJvcHMpIHtcclxuICByZXR1cm4gPE1lZXR1cExpc3QgbWVldHVwcz17cHJvcHMubWVldHVwc30gLz47XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAvLyBmZXRjaCBkYXRhIGZyb20gYW4gQVBJXHJcblxyXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcbiAgICBcIm1vbmdvZGIrc3J2Oi8vdGVzdHVzZXI6TmxtYmFvMjAwNEBjbHVzdGVyMC5jeWV1dC5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpO1xyXG5cclxuICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKTtcclxuXHJcbiAgY2xpZW50LmNsb3NlKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtZWV0dXBzOiBtZWV0dXBzLm1hcCgobWVldHVwKSA9PiAoe1xyXG4gICAgICAgIHRpdGxlOiBtZWV0dXAudGl0bGUsXHJcbiAgICAgICAgYWRkcmVzczogbWVldHVwLmFkZHJlc3MsXHJcbiAgICAgICAgaW1hZ2U6IG1lZXR1cC5pbWFnZSxcclxuICAgICAgICBpZDogbWVldHVwLl9pZC50b1N0cmluZygpXHJcbiAgICAgIH0pKSxcclxuICAgIH0sXHJcbiAgICByZXZhbGlkYXRlOiAxMCxcclxuICB9O1xyXG59XHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuXHJcbi8vICAgY29uc3QgcmVxID0gY29udGV4dC5yZXE7XHJcbi8vICAgY29uc3QgcmVzID0gY29udGV4dC5yZXM7XHJcblxyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBwcm9wczogeyBtZWV0dXBzOiBEVU1NWV9NRUVUVVBTfSxcclxuLy8gICB9O1xyXG4vL31cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9