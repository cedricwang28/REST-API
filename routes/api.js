let express = require('express');
let router = express.Router();
let Uber = require('../models/model.js');

router.get('/uber', (req,res)=>{
    res.send({type:"GET"});
});

router.post('/uber', (req,res,next)=>{
    // let uber = new Uber();
    // uber.save();
    Uber.create(req.body).then((data)=>{
        res.send(data);
    }).catch(next); 
});

router.delete('/uber/:id', (req,res,next)=>{
    Uber.findByIdAndRemove({_id:req.params.id}).then((data)=>{
        res.send(data);
    });
});

router.put('/uber/:id', (req,res,next)=>{
    Uber.findByIdAndUpdate({_id:req.params.id},req.body).then(()=>{
        Uber.findOne({_id:req.params.id}).then((data)=>{
            res.send(data);
        });
    });
});


module.exports = router;