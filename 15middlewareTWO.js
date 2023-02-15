module.exports = reqFilter = (req,resp,next)=>{
    if(!req.query.age) {
        resp.send("Please provide Age if want to play game")
    } else if(req.query.age<16) {
        resp.send("You Can not play these Digital Game")
    } else {
        next();
    }
}
