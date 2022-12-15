const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");


const app = express();
// console.dir(app);
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "views")));

app.get("/",(req,res)=>{
    res.render("mainpage.ejs",{errMessage:""});
});

app.listen(3000,()=>{
    console.log('server running on port : 3000');
});