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
    `INSERT INTO users (username, password, email, role,verified) VALUES ('${request.username}', '${request.password}', '${request.email}','${request.role}','0')`,
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
    `INSERT INTO posts (title, category, content, visibility, solved, user_id_fk,solution,time, username) VALUES 
        ('${request.title}', '${request.category}', '${request.content}', '${request.visibility}', '${request.solved}', '${request.user_id_fk}','No solution yet.','${request.time}','${request.username}')`,
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
    `INSERT INTO users (username, password, email, role,bio,expertise,verified) VALUES ('${request.username}', '${request.password}', '${request.email}','${request.role}','${request.bio}','${request.expertise}','0')`,
    (err, result) => {
      if (err) {
        throw err;
      }

      return result;
    }
  );
};

burdenoff.visiblePosts = (verified) => {
  return new Promise((resolve, reject) => {
    if (verified === "1") {
      pool.query("SELECT * FROM posts", (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      });
    } else {
      pool.query(
        "SELECT * FROM posts WHERE visibility =  1",
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    }
  });
};
burdenoff.getReplies = (c_id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM conversation_reply WHERE c_id_fk= ?",
      [c_id],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

burdenoff.getConv = (user_id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM conversation WHERE user_one= ? OR user_two= ?",
      [user_id, user_id],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

burdenoff.getOne = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT username FROM users WHERE id= ?",
      [id],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

burdenoff.postReply = (request) => {
  pool.query(
    `INSERT INTO conversation_reply (c_id_fk, reply, time, user_id_fk) VALUES 
          ('${request.c_id_fk}', '${request.reply}', '${request.time}', '${request.user_id_fk}')`,
    (err, result) => {
      if (err) {
        throw err;
      }
      return result;
    }
  );
};

burdenoff.postConv = (request) => {
  pool.query(
    `INSERT INTO conversation (title, user_one, user_two,post_id) VALUES 
          ('${request.title}', '${request.user_one}', '${request.user_two}','${request.id}')`,
    (err, result) => {
      if (err) {
        throw err;
      }
      return result;
    }
  );
};

burdenoff.updatePost = (request) => {
  pool.query(
    "UPDATE posts SET solved= ? , solution='Currently in session' WHERE posts.id= ?",
    [request.solved, request.id],

    (err, result) => {
      if (err) {
        throw err;
      }
      return result;
    }
  );
};

burdenoff.putSolution = (request) => {
  pool.query(
    "UPDATE posts SET solution= ? WHERE posts.id= ?",
    [request.cont, request.id],

    (err, result) => {
      if (err) {
        throw err;
      }
      return result;
    }
  );
};

burdenoff.deletePost = (request) => {
  pool.query(
    "DELETE FROM posts WHERE posts.id = ?",
    [request.id],

    (err, result) => {
      if (err) {
        throw err;
      }
      return result;
    }
  );
};

burdenoff.getExperts = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM users WHERE role= 2",      
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

burdenoff.updateVerify = (request) => {
  pool.query(
    "UPDATE users SET verified= ?  WHERE users.id= ?",
    [request.verified, request.id],
    (err, result) => {
      if (err) {
        throw err;
      }
      return result;
    }
  );
};

module.exports = burdenoff;
