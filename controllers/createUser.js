// Make a new user

// Username, Password, Name, Age, Address
// req.body, includes all of them

import db from "../sequelize.js";

export const createUser = async (req, res, next) => {
  const { username, password, name, age, address } = req.body;
  if (!username) {
    return res.status(400).send("Missing Username");
  } else if (!password) {
    return res.status(400).send("Missing Password");
  } else if (!name) {
    return res.status(400).send("Missing name");
  } else if (!age) {
    return res.status(400).send("Missing age");
  } else if (!address) {
    return res.status(400).send("Missing address");
  }

  try {
    if (await doesUserExist(username)) {
      return res.status(400).send("User already exists");
    }

    const result = await db.query(
      `INSERT INTO t_Users (username, password, name, age, address) VALUES (?, ?, ?, ?, ?)`,
      {
        replacements: [username, password, name, parseInt(age), address],
        type: db.QueryTypes.INSERT,
      }
    );

    return res.status(200).send(result);
  } catch (err) {
    return res.status(500).send("An error has occured");
  }
};

async function doesUserExist(username) {
  try {
    const result = await db.query(
      `SELECT * FROM t_Users WHERE username = :username`,
      {
        replacements: { username: username },
      }
    );
    if (!result[0][0]) {
      return false;
    } else {
      return true;
    }
  } catch (err) {
    throw err;
  }
}
