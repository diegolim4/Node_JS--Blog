//Verificar se um usuário é admin

module.exports = {
    isAdmin: function (req, res, next) {

        if (req.isAuthenticated() && req.user.isAdmin == 1 ) {
            return next()
        }
        req.flash('error_msg', 'Somente Admin pode acessar!')
        res.redirect('/')
    }
}