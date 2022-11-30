const mysql = require('mysql2/promise');

var pool = mysql.createPool ({
    host: 'sql10.freesqldatabase.com',
    user: 'sql10582121',
    password: 'm6ZSzb9NdY',
    database: 'sql10582121',
});

module.exports = pool;

