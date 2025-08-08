const {Schema, default: mongoose,model}=require("mongoose");
const blogSechma=new Schema({
    title:{
        type:String,
        reqiured:true,
    },
    body:{
        type:String,
        reqiured:true,
    },
    coverImageUrl:{
        type:String,
        required:false,
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:"user",
    },
},{timestamps:true});


const Blog=model("blog",blogSechma);

module.exports=Blog;

