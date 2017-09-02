let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let fs = require('fs');
let blogModel = require('./../models/model');
let multer = require('multer');
let upload = multer({ dest: 'uploads/' });

//EXPORT ALL API END POINTS

module.exports = function(app){
    //ADD BODY PARSER MIDDLEWARE GLOBALLY
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    

    //FIND ALL BLOGS 
    app.get('/api/allblogs', function(req,res){

        blogModel.find(function(err,docs){
            res.json(docs);
        })

    })

    //FIND BLOG BY ID
    app.get('/api/findblog/:blogid', function(req,res){
        let id = req.params.blogid;
        blogModel.findById(id,function(err,docs){
            res.json(docs);
        })

    })


    //UPDATE BLOGS
    app.post('/api/update', function(req, res){
        blogModel.findByIdAndUpdate(req.body.id, 
            req.body.data, function(err,docs){
                if (err) throw err;
                res.json('Blog has been updated successfully');
            })
    })

    //CREATE NEW BLOGS
    app.post('/api/newblog',  function(req,res){
       
       let newone = {
           "author": req.body.author,
           "title": req.body.title,
           "contentBody": req.body.contentBody,
           "likes":0,
           "dislikes":0
       }
       let newarticle = new blogModel(newone);
       newarticle.date = Date();
       newarticle.save((err, docs)=>{
           if (err) throw err;
           
           res.json("Blog Posted successfully !!");
       })
   })

    //DELETE THE BLOG
    app.delete('/api/deleteblog', function(req, res){
        console.log(req.body.id);
        blogModel.findByIdAndRemove(req.body.id, function(err){
          if (err) throw err;
          res.json("Blog has been successfully deleted !!");
      })
    })

    

}

