import { Router } from "express";
import { getAllCategories, getCategoryById } from "../controllers/categoryController.js";
import { getItemsByCategory, getItemById } from "../controllers/itemController.js";

const router = Router();

router.get("/", async (req, res) => {
  const categories = await getAllCategories();

  res.render("index", { categories: categories });
});

router.get("/category/:id", async (req, res) => {
  const category = await getCategoryById(req.params.id);
  const items = await getItemsByCategory(req.params.id);

  res.render("category", { category: category, items: items });
});

router.get("/item/:id", async (req, res) => {
  const item = await getItemById(req.params.id);
  const category = await getCategoryById(item.category_id);

  res.render("item", { item: item, category: category });
});

export default router;