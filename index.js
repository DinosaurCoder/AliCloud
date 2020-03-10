const express = require("express");


const app = express();


app.use(express.static("./page/"));
app.listen(80,console.log("服务已连接"));