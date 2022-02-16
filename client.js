const net = require('net');

const connect = () => {
  const conn = net.createConnection({
    host: 'TBD',
    port: 'TBD'
  });

  conn.setEncoding('utf8');

  conn.on('connect', (data)=>{
    console.log(data);
  });

  return conn;
};

module.exports = {connect};