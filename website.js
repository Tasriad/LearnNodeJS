const http  = require('http');
const fs = require("fs");
const port  = process.env.PORT || 3000;
const server = http.createServer((req,res)=>{
   res.setHeader('Content-Type','text/html');
    if(req.url == '/'){
        res.statusCode = 200;
        res.end('<h1>This is Tias</h1> <p> Hey man!</p>') ;
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1>This is about Tias</h1> <p> Hey man! about your sister.</p>') ;
    }
    else if(req.url == '/hello')
    {
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    }
    else{
        // res.tias();
        res.statusCode = 404;
        res.end('<h1>Not found!!!</h1>') ;
    }
})
server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});
