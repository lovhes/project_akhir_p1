const bcrypt = require('bcrypt');

function hashPass(plainPass) {
  const salt = bcrypt.genSaltSync(10);
  const hashedPass = bcrypt.hashSync(plainPass, salt) //hook req done

  return hashedPass
}

function hashCheck(plainPass, hashedPass) {
  return bcrypt.compareSync(plainPass, hashedPass)
}

module.exports = { hashPass, hashCheck }