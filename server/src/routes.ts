import express from "express";

const routes = express.Router();

routes.get("/", (req, res) => {
  res.json({Olá: 'mundo'});
})

export default routes;