import db from "../db/queries.js";

async function getItemsByCategory(categoryId) {
  const items = await db.getItemsByCategory(categoryId);
  return items;
}

async function getItemById(itemId) {
  const item = await db.getItemById(itemId);
  return item;
}

async function createItemPost(name, categoryId, quantity, unit, price) {
  await db.insertItem(name, categoryId, quantity, unit, price);
}

export { getItemsByCategory, getItemById, createItemPost };