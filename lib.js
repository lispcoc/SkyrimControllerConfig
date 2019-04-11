
var getValWrappar = function (str, fmt) {
    var result = [];
    str = str.replace(/!0,/g, "!0:");
    elements = str.split(/,/);
    elements.forEach(e => {
        var cmb = ["0xff", "0xff"]
        var i;
        keys = e.split(/\+/);
        for (i = 0; i < 2; i++) {
            if (keys[i]) {
                cmb[i] = fmt(keys[i]);
            }
        }
        result.push(cmb);
    });

    return result;
}

var formatKeyVal = function (str) {
    if (str.match(/:/)) {
        return str;
    }
    var val = parseInt(str);
    if (val == 0xff) {
        return "0xff";
    }
    return "0x" + ("0" + val.toString(16)).slice(-2);
}

var getKeyVal = function (str) {
    return getValWrappar(str, formatKeyVal);
}

var formatMouseVal = function (str) {
    if (str.match(/:/)) {
        return str;
    }
    var val = parseInt(str);
    if (val == 0xff) {
        return "0xff";
    }
    return "0x" + (val.toString(16)).slice(-1);
}

var getMouseVal = function (str) {
    return getValWrappar(str, formatMouseVal);
}

var formatPadKeyVal = function (str) {
    if (str.match(/:/)) {
        return str;
    }
    var val = parseInt(str);
    if (val == 0xff) {
        return "0xff";
    }
    return "0x" + ("000" + val.toString(16)).slice(-4);
}

var getPadKeyVal = function (str) {
    return getValWrappar(str, formatPadKeyVal);
}

function compareByIndex(a, b) {
    if (a.index < b.index) return -1;
    if (a.index > b.index) return 1;
    return 0;
}

var convObjToArray = function (obj) {
    var array = [];
    var keys = Object.keys(obj);
    keys.forEach(key => {
        array.push(obj[key]);
    });
    array.sort(compareByIndex);
    return array;
}
