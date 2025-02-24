// Get all users
import db from "../sequelize.js";

export const getUsers = async (req, res, next) => {
  try {
    const result = await db.query(`SELECT * FROM t_Users`);
    return res.status(200).send(result);
  } catch {
    return res.status(500).send("An error has occured");
  }
};
