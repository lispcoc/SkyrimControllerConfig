// 1st field: User event name.  DO NOT ALTER!  This field is used to ID events in the code							
// 2nd: Keyboard key ID that will proc this event.  A value of 0xff means the event is unmapped for this device.							
// 3rd: Mouse button ID that will proc this event.							
// 4th: Gamepad button ID that will proc this event.							
// 5th: If set to 1, this event can be remapped to a keyboard key
// 6th: If set to 1, this event can be remapped to a mouse button
// 7th: If set to 1, this event can be remapped to a gamepad button
// 8th (Optional): User event binary flag.  Used to group together related user events, like "Movement" or
// "Menu", so they can be toggled on and off together
//							
// Blank lines signify the start of a new input context.							
// See ControlMap.h for more details on input contexts.							
//							

const isValidEvent = function (e) {
    return e in main_gameplay_events;
}

var isValidButton = function (str) {
    var buttons = str.split(/,/g);
    if (buttons)

}


ControlMap = function () {

}


ControlMap.prototype.loadFromArray = function (array) {
    try {
        if (!Array.isArray(a) || !(7 <= a.length && a.length <= 8)) {
            throw new Error("Invalid array");
        }
        if (!isValidEvent(a[0])) {
            throw new Error("Invalid array");
        }
        var buttons = a[1].split(/,/g);
        if (buttons.length > 2 || buttons.length == 0) {
            throw new Error("Invalid array");
        }
        if (buttons[0] == '!0')
        buttons.each(b => {
            
        });

    } catch (error) {
        return false;
    }
    return true;
}
