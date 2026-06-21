import pool from "./pool.js";

async function getAllCategories() {
  const { rows } = await pool.query("SELECT * FROM categories");
  return rows;
}

async function getItemsByCategory(categoryId) {
  const { rows } = await pool.query("SELECT * FROM items WHERE items.category_id = $1", [categoryId]);
  return rows;
}

export default { getAllCategories, getItemsByCategory };