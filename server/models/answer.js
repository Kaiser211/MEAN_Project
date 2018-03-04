let mongoose = require("mongoose");
let likesPlugin = require('mongoose-likes');
let autopopulate = require('mongoose-autopopulate');

let AnswerSchema = new mongoose.Schema({
    answer: {
        type: String,
        required: [true, "Answer must be at leart 5 characters"],
        minlength: [5, "Answer must be at leart 5 characters"]
    },
    detail: {
        type: String
    },
    _question: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Question",
        autopopulate: true
    },
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
        autopopulate: true
    },
}, { timestamps: true });

AnswerSchema.plugin(likesPlugin);
AnswerSchema.plugin(autopopulate);

let Answer = mongoose.model("Answer", AnswerSchema);