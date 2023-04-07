function authUser(req, res, next){
    console.log(req.user, "req user");
    if(req.user == null || undefined){
        res.status(403)
        return res.send('You need to sign in')
    }

    next()
}

function authRole(role){
    return(req, res, next) => {
        if(req.user.role !== role){
            res.status(401)
            return res.send('Not Allowed')
        }

        next()
    }
}

module.exports = {
    authUser,
    authRole
}