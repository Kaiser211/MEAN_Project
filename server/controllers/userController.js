let mongoose = require("mongoose");
let User = mongoose.model("User");
let Question = mongoose.model('Question');
let Answer = mongoose.model('Answer');

module.exports = {
    create: (req, res) => {
        User.find({ email: req.body.email },(err, users) => {
            if (users.length > 0){
                console.log("********I")
                return res.json({'errors': "This user already exist"});
            }else{
                User.create(req.body, (err, newUser) => {
                    if(err){
                        console.log("********II")
                        return res.json(err);
                    }
                    console.log("********III")
                    req.session.user_id = newUser._id;
                    console.log("********IV")
                    return res.json(newUser);
                })
            }
        })
    },
    login: (req, res) => {
        console.log(req.body)
        if(req.body.email != null && req.body.password != null ){
            User.findOne({ email: req.body.email}, (err, user) => {
                if(user == null){
                    return res.json({'errors':'Email not found'})
                }else{
                    if(User.schema.methods.match(req.body.password, user.password)){
                        req.session.user_id = user._id;
                        return res.json(user);
                    } else{
                        return res.json({'errors':'Invalid password'});
                    }
                }
            })
        }else{
            return res.json({ 'errors': 'No login information entered' })
        }
    },
    session: (req, res) => {
        User.findById(req.session.user_id, (err, user) => {
            if(err){
                return res.json(err)
            }
            return res.json(user);
        })
    },
    show: (req, res) => {
        User.find({}, (err, users) => {
            if (err) {
                return res.json(err)
            }
            return res.json(users);
        })
    },
    logout: (req, res) => {
        delete req.session.user_id;
        return res.json(err)
    },
}