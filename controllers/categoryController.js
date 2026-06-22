import db from "../db/queries.js";

async function getAllCategories() {
  const categories = await db.getAllCategories();
  return categories;
}

async function getCategoryById(categoryId) {
  const category = await db.getCategoryById(categoryId);
  return category;
}

export { getAllCategories, getCategoryById };