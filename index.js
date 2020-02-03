let express = require('express');
let router = require('./routes/api.js');
let mongoose = require('./models/model.js');
let bodyParser = require('body-parser');

let app = express();

// mongoose.connect('mongodb+srv://cedric:wtw651125@rest-wiaqe.mongodb.net/test?retryWrites=true&w=majority');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api',router);

app.use((err,req,res,next)=>{
    res.status(422).send({error:err.message});
});

app.listen(process.env.PORT || 4000, ()=>{
    console.log('listening for request...');
});