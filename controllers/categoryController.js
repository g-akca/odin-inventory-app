import db from "../db/queries.js";

async function getAllCategories() {
  const categories = await db.getAllCategories();
  return categories;
}

async function getCategoryById(categoryId) {
  const category = await db.getCategoryById(categoryId);
  return category;
}

async function createCategoryPost(name) {
  await db.insertCategory(name);
}

async function updateCategoryPost(categoryId, name) {
  await db.updateCategory(categoryId, name);
}

async function deleteCategoryPost(categoryId) {
  await db.deleteCategory(categoryId);
}

export { getAllCategories, getCategoryById, createCategoryPost, updateCategoryPost, deleteCategoryPost };