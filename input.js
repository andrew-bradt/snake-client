// Stores the active TCP connection object
let connection;

const handleUserInput = (key) => {
  if (key === '\u0003') process.exit();
  let command = 'Move: ';
  switch (key) {
  case 'w':
    command += 'up';
    break;
  case 'a':
    command += 'left';
    break;
  case 's':
    command += 'down';
    break;
  case 'd':
    command += 'right';
    break;
  case 'p':
    connection.write(`Say: ssssssss`);
    break;
  case 'o':
    connection.write(`Say: SsSssss Ss`);
    break;
  case 'i':
    connection.write(`Say: ssss????`);
    break;
  case 'l':
    connection.write(`Say: SSSSS!`);
    break;
  }
  if (command.length > 6) connection.write(command);
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