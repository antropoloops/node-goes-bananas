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
const { readFileSync } = require("fs");

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

if (!FILE) {
  const message = new Message(STOP_COMMAND, CLIENT_ID);
  send(message);
} else {
  const script = readFileSync(join(__dirname, FILE)).toString();
  console.log("SCRIPT:", script);
  const message = new Message(RUN_COMMAND, CLIENT_ID, script);
  send(message, () => {
    console.log("sent!");
    socket.close();
  });
}
