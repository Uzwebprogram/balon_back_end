import { Router } from "express";
import form from "../controller/form";
import category from "../controller/category";
import products from "../controller/products";
import blog from "../controller/blog";
import top_product from "../controller/top_product";
const router=Router()

// form
router.get("/form",form.Get);
router.get("/form/:id",form.GetId);
router.post("/form",form.Post);
router.put("/form/:id",form.Put);
router.delete("/form/:id",form.Delete);

// blog
router.get("/blog",blog.Get);
router.get("/blog/:id",blog.GetId);
router.post("/blog",blog.Post);
router.put("/blog/:id",blog.Put);
router.delete("/blog/:id",blog.Delete);


// category
router.get("/category",category.Get);
router.get("/category/:id",category.GetId);
router.post("/category",category.Post);
router.put("/category/:id",category.Put);
router.delete("/category/:id",category.Delete);

// products
router.get("/products",products.Get);
router.get("/products/:id",products.GetId);
router.post("/products",products.Post);
router.put("/products/:id",products.Put);
router.delete("/products/:id",products.Delete);
// top
router.get("/top",top_product.Get);
router.get("/top/:id",top_product.GetId);
router.post("/top",top_product.Post);
router.put("/top/:id",top_product.Put);
router.delete("/top/:id",products.Delete);

export default router;