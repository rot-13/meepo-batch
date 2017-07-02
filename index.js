const request = require('request');
const scanner = require('./scanner');

scanNow();

async function scanNow() {
  const list = await scanner.scan();
  const req = {
    entries: list
  }
  console.log(`sending ${list.length} entries to server`);
  request.post({ url: 'https://meepo-api.herokuapp.com/entries', body: req, json: true });
}
