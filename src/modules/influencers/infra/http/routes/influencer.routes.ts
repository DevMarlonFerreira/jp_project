import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import InfluencersController from '../controllers/InfluencersController';
// import isAuthenticated from '@shared/infra/http/middlewares/isAuthenticated';

const customersRouter = Router();
const influencersController = new InfluencersController();

// customersRouter.use(isAuthenticated);

customersRouter.get('/', influencersController.index);

customersRouter.post(
    '/',
    celebrate({
      [Segments.BODY]: {
        name: Joi.string().required(),
        email: Joi.string().email().required(),
      },
    }),
    influencersController.create,
  );

// customersRouter.get(
//   '/:id',
//   celebrate({
//     [Segments.PARAMS]: {
//       id: Joi.string().uuid().required(),
//     },
//   }),
//   influencersController.show,
// );

export default customersRouter;