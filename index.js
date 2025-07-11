const http=require('http')
const app=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>Home Page</h1>')
        res.end()
    }
});
app.listen(3000,()=>{
    console.log('server is running on port 3000');
})