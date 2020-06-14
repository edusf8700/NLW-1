import express from 'express';

const routes = express.Router();

import ItemsController from './controller/ItemsController';
import PointsController from './controller/PointsController';

const itemsController = new ItemsController;
const pointsController = new PointsController;

routes.get('/items', itemsController.index)

routes.post('/points', pointsController.create )

export default routes;