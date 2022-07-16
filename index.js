const express=require('express');
const bodyParser = require('body-parser');
const cors=require('cors');
const app = express();
const dbconnection=require('./db/connection');

var port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,res) => {
    res.send('hii from server')
})
app.use('/admin/auth',require('./routes/admin/auth'));
app.use('/admin/product',require('./routes/admin/product'));
app.use('/admin/getuser',require('./routes/admin/getuser'));
app.use('/user/auth',require('./routes/user/auth'));
app.use('/user/getproduct',require('./routes/user/getproduct'));


app.listen(port,()=>{
    console.log(`Server listening on port ${port}...`);
})