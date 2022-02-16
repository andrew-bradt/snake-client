const net = require('net');

const connect = () => {
  const conn = net.createConnection({
    host: '192.168.0.8',
    port: '50541'
  });

  conn.setEncoding('utf8');

  conn.on('connect', ()=>{
    console.log('Successfully connected to the game server');
    conn.write('Name: @&Y');
  });

  return conn;
};

module.exports = connect;