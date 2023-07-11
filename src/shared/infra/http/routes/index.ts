import { Router } from "express";
import influencersRoutes from "@modules/influencers/infra/http/routes/influencer.routes";

const routes = Router();

routes.use("/influencers", influencersRoutes);

routes.get("/", (_, res) => {
  return res.json({ message: "ok" });
});

export default routes;
