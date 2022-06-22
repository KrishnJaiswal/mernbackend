const mongoose=require("mongoose");

mongoose.connect("mongoose://localhost:27017/myemployee",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log(`connection sucessful`);
}).catch((e)=>{
    console.log(`connection successful`);
})