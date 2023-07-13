import { request, Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import ProfileController from "../controllers/ProfileController";
import IsAuthenticated from '@shared/infra/http/middlewares/isAuthenticated';

const profileRouter = Router();
const profileController = new ProfileController();
// const isAuthenticated = new IsAuthenticated(request);

// @inject("UsersRepository")
// usersRepository: IInfluencersRepository,

// profileRouter.use(isAuthenticated);



profileRouter.get("/",(req, res, next) =>  new IsAuthenticated(req, res, next), profileController.show);

export default profileRouter;
