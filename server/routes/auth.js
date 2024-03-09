const express = require('express');
const router = express.Router();
const passport = require('passport');
const AuthController = require('../controllers/auth');
const wrapAsync = require('../utils/wrapAsync');

router.post('/register', wrapAsync(AuthController.register))

router.route('/login')
    .post((req, res, next) => {
        passport.authenticate('local', (err, user, info) => {
            if (err) {
                return next(err);
            }
            if (!user) {
                // Otentikasi gagal
                console.log(info); // Info berisi pesan atau data tambahan dari otentikasi
                return res.status(401).json({ error: 'Username or password is incorrect' });
            }

            // Otentikasi berhasil
            req.logIn(user, (err) => {
                if (err) {
                    return next(err);
                }

                console.log('User berhasil login:', user);
                return res.json(
                    { 
                        message: 'Login success',
                        success: true,
                        user, 
                    });
            });
        })(req, res, next);
    });

router.route('/logout')
    .get(AuthController.logout)

// router.route('/login')
//     .post(passport.authenticate('local',
    
    
//     {
//     successFlash: {
//         type: 'success_msg',
//         message : 'Login Success'
//     },
//     // failureRedirect: '/login',
//     failureFlash: {
//         type: 'error_msg',
//         message : 'Invalid email or password'
//     }
// }
// ),AuthController.login) 

module.exports = router