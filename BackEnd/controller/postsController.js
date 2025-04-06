import { db } from "../db/database.js";

export const agregarPostsController = async (req, res) => {
  try {
    const { titulo, imgSRC, descripcion, likes } = req.body;
const img = imgSRC;
const likesValue = likes || 0; 

    const query ="INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4)";
    const values = [titulo, img, descripcion, likesValue];

    const result = await db.query(query, values);
    res.status(201).json({ message: "Post creado", post: result.rows });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Error al agregar el post" });
  }
};

export const obtenerPostsController = async (req, res) => {
  try {
    const { rows } = await db.query("SELECT * FROM posts");
    res.status(200).json(rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Error al obtener posts" });
  }
};

export const actualizarPostsController = async (req, res) => {
  const { id } = req.params;
  const { titulo, img, descripcion, likes } = req.body;

  try {
    const query =
      "UPDATE posts SET titulo = $1, img = $2, descripcion = $3, likes = $4 WHERE id = $5";
    const values = [titulo, img, descripcion, likes, id];

    const { rows } = await db.query(query, values);
    res.status(200).json({ message: "Post actualizado", post: rows });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Error al actualizar el post" });
  }
};

export const eliminarPostsController = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await db.query("DELETE FROM posts WHERE id=$1", [id]);
    res.status(200).json({ message: "Post eliminado", post: rows[0] });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Error al eliminar el post" });
  }
};
