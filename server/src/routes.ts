import express from 'express';
import multer from 'multer';

import multerConfig from './config/multerConfig';

const routes = express.Router();
const upload = multer(multerConfig);

import ItemsController from './controller/ItemsController';
import PointsController from './controller/PointsController';

const itemsController = new ItemsController;
const pointsController = new PointsController;

routes.get('/items', itemsController.index)

routes.post('/points', upload.single('image'), pointsController.create )

routes.get('/points', pointsController.index )

routes.get('/points/:id', pointsController.show)

export default routes;