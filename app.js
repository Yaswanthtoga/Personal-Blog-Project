const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");


const homeStartingContent = "Hello Buddies , this is 'yaswanth'. This website is all about the Personal Blog where individual professionals , students or anyone can post their thoughts";


const app = express();

var posts = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/",(req,res)=>{
  res.render("home",{
    home:homeStartingContent,
    posts:posts
  })
})

app.get("/about",(req,res)=>{
  res.render("about",{
  })
})

app.get("/contact",(req,res)=>{
  res.render("contact",{
  })
})

app.get("/compose",(req,res)=>{
  res.render("compose")
})

app.post("/compose",(req,res)=>{
  var post={
    title: req.body.posttitle,
    content: req.body.postbody
  }
  posts.push(post);
  res.redirect("/");
})

app.get("/posts/:topic",(req,res)=>{
  const par = _.lowerCase(req.params.topic);
  var result = 0
  posts.forEach((item) => {
    var val = _.lowerCase(item.title);
    if(par===val){
      res.render("post",{
        pst:item.title,
        cont:item.content
      })
      result = 1;
    }
   })
   if(result===0){
     res.render("post",{pst:"No Post:(",content:"No Posts Yet Posted"})
   }
})


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
