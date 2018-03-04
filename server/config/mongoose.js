let mongoose = require("mongoose");
let fs = require("fs");
let path = require("path");

mongoose.connect("mongodb://localhost/MEAN_Project");
mongoose.Promise = global.Promise;

var models_path = __dirname + "/../models";
fs.readdirSync(models_path).forEach((file) => {
    if (file.includes(".js")) {
        console.log("loading " + file + "...");
        require(models_path + "/" + file);
    }
})