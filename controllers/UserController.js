const User = require('../models/user')
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');
/* O ideal, é que assim como as senhas a secret esteja em uma variavel de ambiente, e nao diretamente no código,
* Mas, para fins de testes e verificaçoes no jwt.io, definirei a secret_jwt abaixo:
*/
const secret_jwt = `lkajsdkasdkajsd,`
const salt = bcrypt.genSaltSync(10);

module.exports = {
    async create(req,res){        
        return 0
},
    async auth(req, res){
        return 0
    },
    verifyJWT(req, res, next){
        return 0
      },
      async profile(req,res){
return 0
    }
}
