import { Router } from "express";
import influencersRoutes from "@modules/influencers/infra/http/routes/influencer.routes";
import profileRouter from "@modules/influencers/infra/http/routes/profile.routes";

const routes = Router();

routes.use("/influencers", influencersRoutes);
routes.use('/profile', profileRouter);

routes.get("/", (_, res) => {
  return res.json({ message: "ok" });
});

export default routes;
