const { Router } = require('express');
const userController = require('../controllers/user.controller');
const UserController = require('../controllers/user.controller');
const authMiddeware = require('../middlewares/auth.middeware');
const routes = Router();

routes.get("/", (req, res)=>{
    return res.json({
        message:"API OK"
    })
});

routes.post("/auth", userController.sigin);
routes.post("/users", authMiddeware.Auth, UserController.store);
routes.get("/users", authMiddeware.Auth,  UserController.show);


module.exports = routes;