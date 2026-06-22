import db from "../db/queries.js";

async function getItemsByCategory(categoryId) {
  const items = await db.getItemsByCategory(categoryId);
  return items;
}

async function getItemById(itemId) {
  const item = await db.getItemById(itemId);
  return item;
}

export { getItemsByCategory, getItemById };