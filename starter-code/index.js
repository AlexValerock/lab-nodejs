// Initial code
console.log('Welcome to Node.js');
const http = require ('http'); 
 // Creating server
 
 // const server = http.createServer((req, res) => {
//     res.end('Bienvenidos a Node.js!');
// })
 // Server listening
 // server.listen('8080')
 http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'Text/html' });
     res.end('<p>Bienvenidos a Node.js!</p><h2>Subtitle</h2>');
})
.listen('8080')
 console.log('Node Application listening on port 8080');
