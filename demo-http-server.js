const { timeStamp } = require('console');
const  http = require('http');
const  hostname = 'localhost';
const  port = 3000;
const server = http.createServer((req, res) => {


    if(req.url === '/about'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('about page\n');

    }else if (req.url === '/contact'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Contact page\n');

    }else if(req.url === '/api'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        const data = {
            message: 'hello from api',
            timeStamp: new Date().toISOString()
        };
        res.end(JSON.stringify(data));
    }else{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('hello, world!\n');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});