// Function require ↓

const { generateError } = require("../../services/generateError");
const { getConnection } = require("../connectionDB");

// Query ↓

const getSingleCommentOffer = async (commentId) => {
  let connection;
  try {
    const connection = await getConnection();
    const [user] = await connection.query(
      `
    SELECT user_id FROM comments
    WHERE id = ?
    `,
      [commentId]
    );

    if (user.length === 0) {
      throw generateError(
        `No existen comentarios con el id: ${commentId}`,
        404
      );
    }

    return user[0];
  } finally {
    if (connection) connection.release();
  }
};

module.exports = { getSingleCommentOffer };
