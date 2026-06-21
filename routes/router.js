import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  console.log("You sent a GET request to the index route.");
});

router.get("/category/:id", (req, res) => {
  console.log(`You sent a GET request to the category route with ID ${req.params.id}.`);
});

router.get("/item/:id", (req, res) => {
  console.log(`You sent a GET request to the item route with ID ${req.params.id}.`);
});

export default router;