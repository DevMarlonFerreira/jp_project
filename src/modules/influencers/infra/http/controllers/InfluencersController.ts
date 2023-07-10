import { Request, Response } from "express";
import { container } from "tsyringe";
import ListInfluencerService from "@modules/influencer/services/ListInfluencerService";

export default class InfluencerController {
  public async index(request: Request, response: Response): Promise<Response> {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;

    const listInfluencer = container.resolve(ListInfluencerService);
    const influencer = await listInfluencer.execute({ page, limit });

    return response.json(influencer);
  }
}
