const db = require ('../config/db');


module.exports = {
    async findAll (req,res) {
        try {
            let response = await db.query('SELECT * FROM produtos')
            res.json(response[0]);
        } catch (error) {
            console.log(error);
        }
    }
    

}