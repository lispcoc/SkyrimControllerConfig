
var getKeyVal = function (str) {
    var result = [];
    str = str.replace(/!0,/g, "!0:");
    elements = str.split(/,/);
    elements.forEach(e => {
        var cmb = ["0xff", "0xff"]
        keys = e.split(/\+/);
        if (keys[0]) {
            cmb[0] = keys[0];
        }
        if (keys[1]) {
            cmb[1] = keys[1];
        }
        result.push(cmb);
    });
    return result;
}

var getMouseVal = function (str) {
    return getKeyVal(str);
}

var formatPadKeyVal = function (str) {
    return str;
}

var getPadKeyVal = function (str) {
    var result = [];
    str = str.replace(/!0,/g, "!0:");
    elements = str.split(/,/);
    elements.forEach(e => {
        var cmb = ["0xff", "0xff"]
        keys = e.split(/\+/);
        if (keys[0]) {
            cmb[0] = formatPadKeyVal(keys[0]);
        }
        if (keys[1]) {
            cmb[1] = formatPadKeyVal(keys[1]);
        }
        result.push(cmb);
    });
    return result;
}
