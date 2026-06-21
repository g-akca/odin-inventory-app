import db from "../db/queries.js";

async function getAllCategories(req, res) {
  const categories = await db.getAllCategories();
  return categories;
}

export { getAllCategories };