# CREATIVE-BLOG

### API END POINTS

> GET :  /api/allblogs  (Getting all blogs)

> GET :  /api/findblog/:blogid  (Searching blog by id)

> POST : /api/update (update already existing blog)

> POST : /api/newblog (create new blog)

> DELETE : /api/deleteblog (this delete the blog by it's id)


### DATA MODEL
```   
  {
    author:String,
    authorImg:{data:Buffer, contentType:String},
    title:String,
    contentBody:String,
    contentImg:{data:Buffer, contentType:String},
    date:Date,
    comments:[{name:String,body:String}],
    likes:Number,
    dislikes:Number

               }   

```




### NOTE: 

```
__________________________________________________________________________________
POST REQUEST: BODY DATA FORMAT FOR UPDATING THE EXISTING BLOGS OR CREATING NEW ONE
-----------------------------------------------------------------------------------            
{
  "id":"put your id given by your mongodb database in string format",

 "data":    {
    author:String,
    authorImg:{data:Buffer, contentType:String},
    title:String,
    contentBody:String,
    contentImg:{data:Buffer, contentType:String},
    date:Date,
    comments:[{name:String,body:String}],
    likes:Number,
    dislikes:Number

               }    
}

/***************************************************************/


```
