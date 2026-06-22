import pool from "./pool.js";

// SELECT queries
async function getAllCategories() {
  const { rows } = await pool.query("SELECT * FROM categories");
  return rows;
}

async function getCategoryById(categoryId) {
  const { rows } = await pool.query("SELECT * FROM categories WHERE id = $1", [categoryId]);
  return rows[0];
}

async function getItemsByCategory(categoryId) {
  const { rows } = await pool.query("SELECT * FROM items WHERE category_id = $1", [categoryId]);
  return rows;
}

async function getItemById(itemId) {
  const { rows } = await pool.query("SELECT * FROM items WHERE id = $1", [itemId]);
  return rows[0];
}

// INSERT queries
async function insertCategory(name) {
  await pool.query("INSERT INTO categories VALUES ($1)", [name]);
}

async function insertItem(name, categoryId, quantity, unit, price) {
  await pool.query("INSERT INTO items VALUES ($1, $2, $3, $4, $5)", [name, categoryId, quantity, unit, price]);
}

export default { getAllCategories, getCategoryById, getItemsByCategory, getItemById };