import { Router } from 'express';


import UserController from './app/controllers/UserController';
import BookController from './app/controllers/BookController';

import SessionController from './app/controllers/SessionController';





import authMiddleware from './app/middlewares/auth';


const routes = new Router();


routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);




routes.use(authMiddleware);

routes.put('/books/:id', BookController.update);
routes.delete('/books/:id', BookController.delete);
routes.get('/book/:id', BookController.viewBook);
routes.put('/books/:id', BookController.update);
routes.put('/rent/:id', BookController.rentBook);
routes.put('/give/:id', BookController.giveBook);
routes.post('/books', BookController.store);





export default routes;
