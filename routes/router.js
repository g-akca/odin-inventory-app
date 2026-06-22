import { Router } from "express";
import { getAllCategories, getCategoryById, createCategoryPost, updateCategoryPost } from "../controllers/categoryController.js";
import { getItemsByCategory, getItemById, createItemPost } from "../controllers/itemController.js";

const router = Router();

// Category routes
router.get("/", async (req, res) => {
  const categories = await getAllCategories();

  res.render("index", { categories: categories });
});

router.get("/category/new", async (req, res) => {
  res.render("categoryNewForm");
});

router.post("/category/new", async (req, res) => {
  await createCategoryPost(req.body.name);

  res.redirect("/");
});

router.get("/category/update/:id", async (req, res) => {
  const category = await getCategoryById(req.params.id);

  res.render("categoryUpdateForm", { category: category });
});

router.post("/category/update/:id", async (req, res) => {
  await updateCategoryPost(req.params.id, req.body.name);

  res.redirect("/");
});

router.get("/category/:id", async (req, res) => {
  const category = await getCategoryById(req.params.id);
  const items = await getItemsByCategory(req.params.id);

  res.render("category", { category: category, items: items });
});

// Item routes
router.get("/item/new", async (req, res) => {
  const category = await getCategoryById(req.query.categoryId || 1);

  res.render("itemNewForm", { category: category });
});

router.post("/item/new", async (req, res) => {
  await createItemPost(req.body.name, req.body.categoryId, req.body.quantity, req.body.unit, req.body.price);

  res.redirect(`/category/${req.body.categoryId}`);
});

router.get("/item/update/:id", async (req, res) => {
  const item = await getItemById(req.params.id);

  res.render("itemUpdateForm", { item: item });
});

router.post("/item/update/:id", async (req, res) => {
  await updateItemPost(req.params.id, req.body.name, req.body.categoryId, req.body.quantity, req.body.unit, req.body.price);

  res.redirect("/");
});

router.get("/item/:id", async (req, res) => {
  const item = await getItemById(req.params.id);
  const category = await getCategoryById(item.category_id);

  res.render("item", { item: item, category: category });
});

export default router;