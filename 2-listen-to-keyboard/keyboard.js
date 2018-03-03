var inputEvent = require("input-event");

function listenKeyboard() {
  var k = new inputEvent("event0"); // 'event0' is the file corresponding to my keyboard in /dev/input/
  k.on("keyup", console.log);
  k.on("keydown", console.log);
  k.on("keypress", console.log);
  k.on("rel", console.log);
  k.on("abs", console.log);
  k.on("syn", console.log);
}

listenKeyboard();
