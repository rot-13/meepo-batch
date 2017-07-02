const scanner = require('./scanner');
scanNow();

async function scanNow() {
  const list = await scanner.scan();
  console.log(list);
}
