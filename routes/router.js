import { Router } from "express";
import { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory } from "../controllers/categoryController.js";
import { getItemsByCategory, getItemById, createItem, updateItem, deleteItem, deleteItemsByCategory } from "../controllers/itemController.js";

const router = Router();

router.get("/", async (req, res) => {
  const categories = await getAllCategories();
  res.render("index", { categories });
});

// --- Categories ---
router.get("/categories", async (req, res) => {
  const categories = await getAllCategories();
  res.render("index", { categories });
});

router.get("/categories/new", (req, res) => {
  res.render("categoryNewForm");
});

router.post("/categories", async (req, res) => {
  await createCategory(req.body.name);
  res.redirect("/categories");
});

router.get("/categories/:id", async (req, res) => {
  const category = await getCategoryById(req.params.id);
  const items = await getItemsByCategory(req.params.id);
  res.render("category", { category, items });
});

router.get("/categories/:id/edit", async (req, res) => {
  const category = await getCategoryById(req.params.id);
  res.render("categoryUpdateForm", { category });
});

router.post("/categories/:id", async (req, res) => {
  await updateCategory(req.params.id, req.body.name);
  res.redirect(`/categories/${req.params.id}`);
});

router.post("/categories/:id/delete", async (req, res) => {
  await deleteItemsByCategory(req.params.id);
  await deleteCategory(req.params.id);
  res.redirect("/categories");
});

// --- Items ---
router.get("/items/new", async (req, res) => {
  const category = await getCategoryById(req.query.categoryId || 1);
  res.render("itemNewForm", { category });
});

router.post("/items", async (req, res) => {
  await createItem(req.body.name, req.body.categoryId, req.body.quantity, req.body.unit, req.body.price);
  res.redirect(`/categories/${req.body.categoryId}`);
});

router.get("/items/:id", async (req, res) => {
  const item = await getItemById(req.params.id);
  const category = await getCategoryById(item.category_id);
  res.render("item", { item, category });
});

router.get("/items/:id/edit", async (req, res) => {
  const item = await getItemById(req.params.id);
  const category = await getCategoryById(item.category_id);
  res.render("itemUpdateForm", { item, category });
});

router.post("/items/:id", async (req, res) => {
  await updateItem(req.params.id, req.body.name, req.body.categoryId, req.body.quantity, req.body.unit, req.body.price);
  res.redirect(`/items/${req.params.id}`);
});

router.post("/items/:id/delete", async (req, res) => {
  const item = await getItemById(req.params.id);
  await deleteItem(req.params.id);
  res.redirect(`/categories/${item.category_id}`);
});

export default router;