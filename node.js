console.log("hello world")
//prints

console.error()
//print errorMessage

console.dir({name: "Kate", age: 20})
//prints object
// ------------------------------------------

https.get(option, callback)
const https = require('https');

https.get('https://encrypted.google.com/', (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });

}).on('error', (e) => {
  console.error(e);
});