import { Router } from 'express';
import influencersRoutes from '@modules/influencer/infra/http/routes/influencer.routes';

const routes = Router();

routes.get('/', (_, res) => {
  return res.json({ message: 'ok' });
});


routes.use('/influencers', influencersRoutes);


export default routes;