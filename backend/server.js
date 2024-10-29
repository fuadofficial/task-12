const fs = require("fs");
const { createServer } = require("http");
const bodyParser = require("body-parser");

let userList = [
    {
        userName: "Ajmal",
    },
    {
        userName: "Fuad",
    },
    {
        userName: "Basith",
    },
    {
        userName: "Mrushid",
    },
    {
        userName: "Sahal",
    },
    {
        userName: "kapuuuuuuuu",
    },
    {
        userName: "sample master",
    },
]; 

const server = createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    switch (req.url) {
        case "/": {
            if (req.method === "GET") {
                fs.readFile("home.html", (err, data) => {
                    if (err) {
                        console.log(err);
                    }
                    res.writeHead(200, { "Content-Type": "text/html" });
                    res.end(data);
                });
                break;
            }
            if (req.method === "POST") {
                try {
                    const data = JSON.parse(req.body);
                    console.log(data);
                    data && userList.push(data);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        case "/users": {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end(JSON.stringify(userList));
            break;
        }
    }
});
server.listen(4000, () => {
    console.log("listening to port");
});