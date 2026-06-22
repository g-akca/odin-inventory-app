import { Router } from "express";
import { getAllCategories, getCategoryById, getItemsByCategory } from "../controllers/categoryController.js";

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

router.get("/item/:id", (req, res) => {
  console.log(`You sent a GET request to the item route with ID ${req.params.id}.`);
});

export default router;