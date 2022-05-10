const bcrypt = require('bcrypt')

async function crypto(pwd){
    const salt = await bcrypt.genSalt()

    const passwordCrypto = await bcrypt.hash(pwd, salt)

    return passwordCrypto
}

module.exports = crypto