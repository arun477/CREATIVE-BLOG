
app.controller('blogController',['$http','$timeout', function($http, $timeout){
  let self = this;

  $http({
   method: "GET",
   url:'/api/allblogs'
 }).then(function success(res){
   self.blogData = res.data;
   console.log(res.data);
 }, function error(err){
   console.log(err)
 })


 
 self.allblogs = function(){
  $http({
   method: "GET",
   url:'/api/allblogs'
 }).then(function success(res){
   self.blogData = res.data;
   console.log(res.data);
 }, function error(err){
   console.log(err)
 })


}






self.content = null;
self.title = null;
self.name =null;
self.success = 0;
self.fail = 0;
self.del =0;


self.createNewBlog = function(){
 
 if(self.content.length>1 && self.title.length>1 && self.name.length>1){
   $http({
    method:'POST',
    data: {
      
      "author": self.name,
      "title": self.title,
      "contentBody": self.content
      
    },
    url:'/api/newblog'
  }).then(function success(res){
    self.success = 1;
    self.fail =0;
    self.content = null;
    self.title = null;
    self.name =null;
    $timeout(function(){
      self.success = 0;
      
    }, 5000);
    console.log(res)
  }, function err (err){
    console.log(err)
  })  

} else {
 self.success =0;
 self.fail = 1;
 
}

}

self.deleteblog = function(index, repeatscope){
 

  
 $http({
  method  : 'DELETE',
  url     : 'api/deleteblog',
  data    : {
    'id': repeatscope.blog._id
  },
  headers: {'Content-Type': 'application/json;charset=utf-8'}
}).then(function success(res){
 self.del=1;
 self.allblogs();
 $timeout(function(){
   self.del=0;
 },5000)
 console.log(res);
}, function err (err){
  console.log(err);
})  

}


self.updatelikes = function(repeatscope){
  let id = repeatscope.blog._id;
  let updatelikes = repeatscope.blog.likes + 1
  
  $http({
    method:'POST',
    data: {
     "id" : id,
     "data":{
      "likes":updatelikes   
    }
  },
  url:'/api/update'
}).then(function success(res){
  self.allblogs();
  console.log(res)
}, function err (err){
  console.log(err)
})    

} 

self.updatedislikes = function(repeatscope){
  let id = repeatscope.blog._id;
  let updatedislikes = repeatscope.blog.dislikes + 1
  
  $http({
    method:'POST',
    data: {
     "id" : id,
     "data":{
      "dislikes":updatedislikes   
    }
  },
  url:'/api/update'
}).then(function success(res){
  self.allblogs();
  console.log(res)
}, function err (err){
  console.log(err)
})    

} 

}])