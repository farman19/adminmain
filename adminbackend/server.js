const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

const adminfrontend = path.join(__dirname,'../admin/build');

const port = 5001;




app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(adminfrontend))

app.use(cors({
    origin:'*',
    
}));

app.get('/', (req, res)=>{
    res.send('server is running')
})



app.listen(port,()=>{
    console.log(`server is running at port http://localhost:${port}`) ;
})
