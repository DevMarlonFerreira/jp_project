import { Router } from "express";
import sessionsRouter from "@modules/influencers/infra/http/routes/sessions.routes";
import influencersRoutes from "@modules/influencers/infra/http/routes/influencer.routes";
import profileRouter from "@modules/influencers/infra/http/routes/profile.routes";

const routes = Router();

routes.use("/api/sessions", sessionsRouter);
routes.use("/api/influencers", influencersRoutes);
routes.use("/api/profile", profileRouter);

routes.get("/", (_, res) => {
  return res.json({ message: "ok" });
});

export default routes;
