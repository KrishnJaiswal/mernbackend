const express=require('express');
const { dirname } = require('path');
const path=require('path');
const hbs=require("hbs");
const port=process.env.PORT ||8000;
require("./db/conn");
const app=express();

const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../template/views");
const partials_path=path.join(__dirname,"../template/partials");

app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);

app.get("/",(req,res)=>{
    res.render("index");
});

app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
})
