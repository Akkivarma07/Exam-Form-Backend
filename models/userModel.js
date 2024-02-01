const db = require('../db');

const userModel = {
  registerUser: async (name, prn, branch, email) => {
    const sql = 'INSERT INTO users (name, prn, branch, email) VALUES (?, ?, ?, ?)';
    await db.query(sql, [name, prn, branch, email]);
  },
};

module.exports = userModel;
