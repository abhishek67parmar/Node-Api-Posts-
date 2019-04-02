var mongoose= require('mongoose');

var postSchema = mongoose.Schema({
  title:{type: String, required:true},
  content:{type: String, default:'hello!!!'}
});

module.exports= mongoose.model('Post',postSchema);