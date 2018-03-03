/**
 * Send a script to SonicPi
 *
 * usage: `FILE=scripts/test.rb node send-script`
 *
 * or to stop the script: `node send-script`
 */

const dgram = require("dgram");
const { Message } = require("osc-js");
const { join } = require("path");

const RUN_COMMAND = "/run-code";
const STOP_COMMAND = "/stop-all-jobs";

const CLIENT_ID = "send-script";

// The FILE to send
const FILE = process.env.FILE || null;
// The SonicPi port:
const PORT = process.env.PORT || 4559;

// send a messsage via udp
const socket = dgram.createSocket("udp4");

function send(message, cb) {
  const binary = message.pack();
  socket.send(new Buffer(binary), 0, binary.byteLength, PORT, "127.0.0.1", cb);
}

const message = new Message(RUN_COMMAND, "123123", "play 100");
send(message, () => {
  console.log("send", message);
  socket.close();
});
