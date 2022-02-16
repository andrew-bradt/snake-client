const net = require('net');

const connect = () => {
  const conn = net.createConnection({
    host: 'TBD',
    port: 'TBD'
  });

  conn.setEncoding('utf8');

  conn.on('connect', ()=>{
    console.log('Successfully connected to the game server');
    conn.write('Name: @&Y');
  });

  return conn;
};

module.exports = { connect };