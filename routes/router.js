import { Router } from "express";
import { createCategoryPost, getAllCategories, getCategoryById } from "../controllers/categoryController.js";
import { getItemsByCategory, getItemById } from "../controllers/itemController.js";

const router = Router();

// Category routes
router.get("/", async (req, res) => {
  const categories = await getAllCategories();

  res.render("index", { categories: categories });
});

router.get("/category/:id", async (req, res) => {
  const category = await getCategoryById(req.params.id);
  const items = await getItemsByCategory(req.params.id);

  res.render("category", { category: category, items: items });
});

router.get("/category/new", async (req, res) => {
  res.render("categoryNewForm");
});

router.post("/category/new", async (req, res) => {
  await createCategoryPost(req.body.name);

  res.redirect("/");
});

// Item routes
router.get("/item/:id", async (req, res) => {
  const item = await getItemById(req.params.id);
  const category = await getCategoryById(item.category_id);

  res.render("item", { item: item, category: category });
});

router.get("/item/new", async (req, res) => {
  res.render("itemNewForm");
});

router.post("/item/new", async (req, res) => {
  await createItemPost(req.body.name, req.body.categoryId, req.body.quantity, req.body.unit, req.body.price);

  res.redirect(`/category/${req.body.categoryId}`);
});

export default router;