let User = require("../controllers/userController");
let Question = require("../controllers/questionController");
let Answer = require("../controllers/answerController");
let path = require("path");

module.exports = (app) => {
    
    app.post("/user/create", User.create);
    app.post("/user/login", User.login);
    app.get("/user", User.session);
    app.get("/users", User.show);
    app.delete("/user/logout", User.logout);

    
    app.post("/question/create", Question.create);
    app.get("/questions", Question.show);
    app.get("/question/:id", Question.findOne);
    app.get("/question/answer/:id", Question.findOneWithAnswers);

    
    app.post("/answer/create/:id", Answer.create);
    app.get("/answers", Answer.showAll);
    app.post("/answer/like/:id", Answer.like);
    
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./client/dist/index.html"));
    })
}