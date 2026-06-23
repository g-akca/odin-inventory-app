import db from "../db/queries.js";

async function getAllCategories() {
  const categories = await db.getAllCategories();
  return categories;
}

async function getCategoryById(categoryId) {
  const category = await db.getCategoryById(categoryId);
  return category;
}

async function createCategory(name) {
  await db.insertCategory(name);
}

async function updateCategory(categoryId, name) {
  await db.updateCategory(categoryId, name);
}

async function deleteCategory(categoryId) {
  await db.deleteCategory(categoryId);
}

export { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory };