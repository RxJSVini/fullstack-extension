const UserScheme = require("../models/UserScheme");
const mongoose  = require('mongoose');
const jwt = require('jsonwebtoken');
const jwtConfiguration = require("../config/jwt.configuration");

const user = mongoose.model("UserScheme", UserScheme);

class UserController {
    async store(req, res) { 
        await user.create({name:req.body.name, email:req.body.email})
        
        .then((response) =>{
            return res.json(response)
        })

        .catch((error) =>{
            return res.send(error.message);
        })

    };

  async show(req, res){
      await user.find()
      .then((response ) =>{

          return res.json(response)
      })
      .catch((error) =>{
          return res.send(error.message);
      })
  }



  async sigin(req, res){

    const token = jwt.sign({user:req.body.username},jwtConfiguration.secret, {expiresIn:jwtConfiguration.expiresIn});

    console.log(jwt.decode(token))
    return res.json(token)
  }


}

module.exports = new UserController();


