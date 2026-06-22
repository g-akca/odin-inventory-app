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

async function updateItemPost(itemId, name, categoryId, quantity, unit, price) {
  await db.updateItem(itemId, name, categoryId, quantity, unit, price);
}

async function deleteItemPost(itemId) {
  await db.deleteItem(itemId);
}

async function deleteItemsByCategory(categoryId) {
  await db.deleteItemsByCategory(categoryId);
}

export { getItemsByCategory, getItemById, createItemPost, updateItemPost, deleteItemPost, deleteItemsByCategory };