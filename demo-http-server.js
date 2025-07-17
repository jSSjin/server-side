const  http = require('http');
const  hostname = 'localhost';
const  port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    if(req.url === '/about'){
        res.end('about page\n');
    }else if (req.url === '/contact'){
        res.end('Contact page\n');
    }else{
        res.end('hello, world!\n');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});