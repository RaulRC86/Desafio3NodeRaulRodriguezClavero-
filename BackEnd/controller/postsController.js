import { db } from "../db/database.js";

export const agregarPostsController = async (req, res) => {
  try {
    const { titulo, img, descripcion, likes } = req.body;

    const query = "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4)";
    const values = [titulo, img, descripcion, likes];

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