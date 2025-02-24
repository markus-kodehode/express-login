import db from "../sequelize.js";

export const getUser = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).send("Missing id");
  }

  try {
    const result = await db.query(`SELECT * FROM t_Users WHERE id = :id`, {
      replacements: { id: id },
      type: db.QueryTypes.SELECT,
    });

    return res.send(result);
  } catch (err) {
    return res.status(500).send("An error has occured");
  }
};
