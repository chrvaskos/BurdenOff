const mysql = require("mysql");

const pool = mysql.createPool({
    connectionLimit: 10,
    password: "123",
    user: "me",
    database: "testdb",
    host: "localhost",
    port: "3306",
});

let testdb = {};

testdb.all = () => {
    return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM post", (err, results) => {
        if (err) {
            return reject(err);
        }
        return resolve(results);
    });
    });
};
module.exports = testdb;
