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
  }
  if (command.length > 6) return command;
};

// Setup interface to handle user input from stdin
const setupInput = () =>{
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

module.exports = setupInput;