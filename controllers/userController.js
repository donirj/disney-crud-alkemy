exports.createProfile = async (req, res) => {

    console.log(req.session.currentUser)
    res.render("users/profile", {foundUser: req.session.currentUser })

}

exports.menu = async (req, res) => {

    console.log(req.session.currentUser)
    res.render("users/menu", {foundUser: req.session.currentUser })
}