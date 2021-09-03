'use strict';

const conn = require('../db.js');
const bcrypt = require('bcrypt');

const loginUser = (req, res) => {
    const {username, pass} = req.body

    conn.pool.query('SELECT * FROM "user" WHERE username=$1;',
        [username],
        (error, results) => {
            if (error) throw error;
            else {
                const user = results.rows[0]; // NEED TO FIX CHECK THE LENGHT IF = 0 THEN ERROR
                bcrypt.compare(pass, user.password, function(err, respond) {
                    if (err){
                      // handle error
                    }
                    if (respond){
                      res.send('Good')
                    } else {
                      // response is OutgoingMessage object that server response http request
                      return res.json({success: false, message: 'passwords do not match'});
                    }
                  });
            }
        });

}

const signUp = async (req, res) => {
    const {username, name, pass, bod, email, address, nation_id} = req.body

    const hashPass = await bcrypt.hash(pass,10)
    
    conn.pool.query('INSERT INTO "user" (username,name,password,bod,email,address,national_id) \n' +
    'VALUES($1,$2,$3,CAST($4 AS DATE),CAST($5 AS VARCHAR),$6,CAST($7 AS VARCHAR))',
    [username, name, hashPass, bod, email, address, nation_id]
    );
    res.send(`Your Account has been registered`)
}

module.exports = {
    signUp,
    loginUser
};
