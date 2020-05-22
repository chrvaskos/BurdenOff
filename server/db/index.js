const mysql = require("mysql");

const pool = mysql.createPool({
    connectionLimit: 10,
    password: "123",
    user: "me",
    database: "burdenoff",
    host: "localhost",
    port: "3306",
});

let burdenoff = {};

burdenoff.all = () => {
    return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM posts", (err, results) => {
        if (err) {
            return reject(err);
        }
        return resolve(results);
    });
    });
};
module.exports = burdenoff;
