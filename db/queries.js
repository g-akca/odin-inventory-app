import pool from "./pool.js";

async function getAllCategories() {
  const { rows } = await pool.query("SELECT * FROM categories");
  return rows;
}

async function getCategoryById(categoryId) {
  const { row } = await pool.query("SELECT * FROM categories WHERE id = $1", [categoryId]);
  return row;
}

async function getItemsByCategory(categoryId) {
  const { rows } = await pool.query("SELECT * FROM items WHERE category_id = $1", [categoryId]);
  return rows;
}

export default { getAllCategories, getCategoryById, getItemsByCategory };