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
  await pool.query("INSERT INTO categories (name) VALUES ($1)", [name]);
}

async function insertItem(name, categoryId, quantity, unit, price) {
  await pool.query(
    "INSERT INTO items (name, category_id, quantity, unit, price) VALUES ($1, $2, $3, $4, $5)",
    [name, categoryId, quantity, unit, price]
  );
}

// UPDATE queries
async function updateCategory(categoryId, name) {
  await pool.query("UPDATE categories SET name = $1 WHERE id = $2", [name, categoryId]);
}

async function updateItem(itemId, name, categoryId, quantity, unit, price) {
  await pool.query(
    "UPDATE items SET name = $1, category_id = $2, quantity = $3, unit = $4, price = $5 WHERE id = $6",
    [name, categoryId, quantity, unit, price, itemId]
  );
}

// DELETE queries
async function deleteCategory(categoryId) {
  await pool.query("DELETE FROM categories WHERE id = $1", [categoryId]);
}

async function deleteItem(itemId) {
  await pool.query("DELETE FROM items WHERE id = $1", [itemId]);
}

async function deleteItemsByCategory(categoryId) {
  await pool.query("DELETE FROM items WHERE category_id = $1", [categoryId]);
}

export default { 
  getAllCategories, 
  getCategoryById, 
  getItemsByCategory, 
  getItemById, 
  insertCategory, 
  insertItem, 
  updateCategory, 
  updateItem,
  deleteCategory,
  deleteItem,
  deleteItemsByCategory
};