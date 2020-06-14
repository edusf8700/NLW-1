import express from "express";
import knex from "./database/connection";

const routes = express.Router();

routes.get("/items", async (req, res) => {
  const items = await knex('items').select('*');

  const serializedItems = items.map(item => {
    return {
      id: item.id,
      title: item.title,
      image_url: `http://localhost:3333/uploads/${item.image}`
    }
  });

  return res.json(serializedItems);
})

routes.post('/points', async (req, res) => {
  const {
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    uf,
    items
  } = req.body;


  const trx = await knex.transaction();

  const insertedIds = await trx('points').insert({
    image: 'https://images.unsplash.com/photo-1554208873-4292cf6c952d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=40',
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    uf
  });

  const point_id = insertedIds[0];

  const pointItems = items.map((item_id: Number) => {
    return {
      item_id,
      point_id
    }
  });

  await trx('point_items').insert(pointItems);

  await trx.commit();

  return res.json({ success: true });
})

export default routes;