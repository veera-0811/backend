import http from 'http'

const port = 3000;

const server = http.createServer((req, res) => {

    // 
     if (req.url === '/html') {
        res.statusCode = 200
        res.setHeader("Content-Type", "text/html");
        res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resume - Revanth Srinivas Malla</title>
    <style>
        body {
            background-color: rgb(209, 239, 234);
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            position: relative;
        }
        h1, h2, h4 {
            text-align: center;
        }
        #name {
            margin-top: 20px;
        }
        #image {
            height: 170px;
            width: 160px;
            position: absolute;
            top: 30%;
            left: 70px;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        h2,h1{
            margin-top: 40px;
            margin-left: 0px ;
        }
        .skills ul {
            list-style-type: none;
            padding: 0;
        }
        .skills li {
            margin: 5px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Resume</h1>
        <h2 id="name">Revanth Srinivas Malla</h2>
        <img src="nullpic.webp" id="image" alt="Profile Picture">
        <h4>mallarevanthsrinivas@gmail.com</h4>
            <h2>Skills</h2>
            <ul>
                <li>HTML</li>
                <li>CSS
            </ul>
        </div>
    </div>
</body>
</htm>`)
        res.end()
    }

    // else if (req.method === 'POST' && req.url === '/recivedata') {
    //     res.statusCode = 200
    //     res.setHeader("Content-Type", "application/json");
    //     let body = "";
    //     req.on("data", (chunk) => {
    //         body += chunk.toString();
    //     });
    //     console.log(body)
    //     res.end()
    // }

    // else if (req.url === '/senddata') {
    //     res.statusCode = 200
    //     res.setHeader("Content-Type", "application/json");
    //     const data = { Name: "Teja", Branch: "cse" }
    //     res.end(JSON.stringify(data))
    // }

    else {
        res.statusCode = 400
        res.end("Page Not Found\n")
    }
});

server.listen(port, () => {
    console.log(`Server running at ${port}`);
});