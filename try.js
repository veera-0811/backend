import http from 'http'
const port=123;
const rev=http.createServer((req,res)=>{
    if(req.url===123){
        res.statusCode=200;
    res.setHeader("Content-Type","Text-html");
    res.write();
    res.end()
}
else{
    res.statusCode=404;
    res.end("Page not found")
});
rev.listen(port, () => {
    console.log(`Server running at ${port}`);
});