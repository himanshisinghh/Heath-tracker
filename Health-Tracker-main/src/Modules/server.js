const http =require('http');

const server = http.createServer((req, resp) => {
    console.log(req);

});

const PORT =5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));



