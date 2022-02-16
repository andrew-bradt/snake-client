const IP = '165.227.47.243';
const PORT = '50541';
const KEY_MAPPINGS = {
  EXIT: '\u0003',
  MOVEMENT: {
    w: 'up',
    a: 'left',
    s: 'down',
    d: 'right'
  },
  CANNED_MESSAGES: {
    p: 'ssssssss',
    o: 'sSssSsSs',
    i: 'sSSSSS??',
    l: 'SSSSS!!!'
  }
};

module.exports = {
  IP,
  PORT,
  KEY_MAPPINGS
};