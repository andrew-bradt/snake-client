// Stores the active TCP connection object
const { EXIT, MOVEMENT, CANNED_MESSAGES } = require('./constants').KEY_MAPPINGS;
let connection;

const handleUserInput = (key) => {
  if (key === EXIT) process.exit();
  if (MOVEMENT[key]) return connection.write(`Move: ${MOVEMENT[key]}`);
  if (CANNED_MESSAGES[key]) return connection.write(`Say: ${CANNED_MESSAGES[key]}`);
};

// Setup interface to handle user input from stdin
const setupInput = (conn) =>{
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

module.exports = setupInput;