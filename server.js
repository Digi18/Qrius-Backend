const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(require('./routes/saveUser'));


app.get('/',(req,res) => {

     res.end("Hello");
});

app.listen(port,() => {

     console.log(`Server is running at ${port}`);
});