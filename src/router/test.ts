import { Router } from "express";
import { pool } from "../db";

const testRouter = Router();

testRouter.get("/", (req, res, next) => {
  pool.query("SELECT * FROM test", (error, results) => {
    if (error) {
      next(error);
    } else {
      res.status(200).json(results.rows);
    }
  });
});

export default testRouter;
