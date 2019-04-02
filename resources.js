
var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');

var Post = require('./model/post');


var app = express();
//console.log('sdfsd');
mongoose.connect("mongodb+srv://abhi_data:Abhi67shek@abhi-aaklb.mongodb.net/post_data?retryWrites=true")
.then(()=>{
  console.log("Connection Established!!!!!");
})
.catch(() =>{
  console.log("error!! Connection failed!!!");
});

var countt = 0;
var count1 = 0;
// var data = {
//   msg: 'post data',
//   posts: [
//     {
//       _id: 'id11',
//       title: 'this is title',
//       content: 'first content'
//     },
//     {
//       _id: 'id22',
//       title: 'this is title 22',
//       content: 'second content'
//     }
//   ]
// };

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.post('/testpost', (req, res, next) => {
  var test= new Post({
    title:req.body.title,
    content:req.body.content
  });
  
  console.log(test);
  test.save();
  data.posts.push(test);
  res.send('data received');
});

app.use('/test111', (req, res, next) => {
  count1++;
  res.set('content-type', 'text/html');
  res.send('<h1>request count : ' + count1 + '</h1>');
});

app.use('/test', (req, res, next) => {
  countt++;
  console.log('Request count test: ' + countt);

  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log('Request from: ' + ip);
  //console.log(ip);
  //res.send('Hi this is from express!!');
  Post.find().then(document => {
    console.log(document);
    res.status(200).json(document);
  });

  

  
});

module.exports = app;