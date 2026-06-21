const db;

async function getAllCategories(req, res) {
  const categories = await db.getAllCategories();

  if (!categories) {
    res.status(404).send("No categories were found");
    return;
  }

  return categories;
}

export { getAllCategories };