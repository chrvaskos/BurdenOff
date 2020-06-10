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

burdenoff.allPosts = () => {
    return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM posts", (err, results) => {
        if (err) {
            return reject(err);
        }
        return resolve(results);
    });
    });
};

burdenoff.postUser = () =>{
    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO users SET ?', request.body, (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result);
        });
        });

}

module.exports = burdenoff;
