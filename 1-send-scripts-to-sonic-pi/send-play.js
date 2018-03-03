/**
 * Send "/play" OSC command to SonicPi
 *
 * usage: `PORT=4559 NOTE=10 node send-play`
 */

const dgram = require("dgram");
const { Message } = require("osc-js");

const NOTE = process.env.NOTE || 10;
// The SonicPi port:
const PORT = process.env.PORT || 4559;

// send a messsage via udp
const socket = dgram.createSocket("udp4");

function send(channel, note, cb) {
  const message = new Message(channel, note);
  const binary = message.pack();
  socket.send(new Buffer(binary), 0, binary.byteLength, PORT, "127.0.0.1", cb);
}

send("/play", NOTE, () => {
  socket.close();
});
