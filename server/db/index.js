const mysql = require("mysql");
const request = require("request");

const pool = mysql.createPool({
  connectionLimit: 10,
  password: "123",
  user: "me",
  database: "burdenoff",
  host: "localhost",
  port: "3306",
});
var config = {
  password: "123",
  user: "me",
  database: "burdenoff",
  host: "localhost",
  port: "3306",
};

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
burdenoff.allUsers = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM users", (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

burdenoff.postUser = (request) => {
  pool.query(
    `INSERT INTO users (username, password, email, role) VALUES ('${request.username}', '${request.password}', '${request.email}','${request.role}')`,
    (err, result) => {
      if (err) {
        throw err;
      }

      return result;
    }
  );
};

burdenoff.postPost = (request) => {
  pool.query(
    `INSERT INTO posts (title, category, content, visibility, solved, user_id_fk) VALUES 
        ('${request.title}', '${request.category}', '${request.content}', '${request.visibility}', '${request.solved}', '${request.user_id_fk}')`,
    (err, result) => {
      if (err) {
        throw err;
      }
      return result;
    }
  );
};

burdenoff.postExpert = (request) => {
    pool.query(
      `INSERT INTO users (username, password, email, role,bio,expertise,verified) VALUES ('${request.username}', '${request.password}', '${request.email}','${request.role}','${request.bio}','${request.expertise}','${request.verified}')`,
      (err, result) => {
        if (err) {
          throw err
        }
  
        return result;
      }
    );
  };
module.exports = burdenoff;
