const express = require('express');
const bodyParser=require('body-parser');
const app = express();

const works = require('./routes/api/work');

app.use(bodyParser.json())
app.use('/api/gramothan',works)


const port = process.env.PORT || 3001;
app.listen(port,()=>{
      console.log(`server running on port ${port}`)
})