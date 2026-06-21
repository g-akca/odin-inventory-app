import { Router } from "express";
import { getAllCategories } from "../controllers/categoryController.js";

const router = Router();

router.get("/", async (req, res) => {
  const categories = await getAllCategories(req, res);

  console.log(categories);
});

router.get("/category/:id", (req, res) => {
  console.log(`You sent a GET request to the category route with ID ${req.params.id}.`);
});

router.get("/item/:id", (req, res) => {
  console.log(`You sent a GET request to the item route with ID ${req.params.id}.`);
});

export default router;