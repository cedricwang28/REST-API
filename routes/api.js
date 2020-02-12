let express = require('express');
let router = express.Router();
let Uber = require('../models/model.js');

router.get('/uber', (req,res)=>{
    // Uber.geoNear(
    //     {type:'Point', coordinates:[parseFloat(req.query.lng),parseFloat(req.query.lat)]},
    //     {maxDistance:100000, spherical:true}
    // ).then(function(data){
    //     res.send(data);
    // });
    Uber.aggregate([
        {
            $geoNear: {
                near: {type:'Point', coordinates:[parseFloat(req.query.lng), parseFloat(req.query.lat)]},
                distanceField: "dist.calculated",
                maxDistance: 100000,
                spherical: true                
            }
        }
    ]).then(function(Locs){
        res.send(Locs)
    });
    
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