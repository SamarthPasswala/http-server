const http = require('http')

const fs = require('fs')

const port = 8080;

const reqHandler = (req, res) => {

    // res.write('<h1>Hello Node User</h1>')

    // res.end()

    let fileName = ""

    switch (req.url) {

        case '/':
            fileName = 'index.html';
            break;

        case '/about':
            fileName = 'about.html';
            break;

        case '/contact':
            fileName = 'contact.html';
            break;

        default:
            fileName = 'error.html';

    }

    fs.readFile(fileName, (err, result) => {
        if (!err) {
            res.end(result)
        }
    })

}

const server = http.createServer(reqHandler)

server.listen(port, (err) => {
    if (err) {
        console.log("Server Not Started");
    }
    console.log("Server Started in Port : " + port);
})
