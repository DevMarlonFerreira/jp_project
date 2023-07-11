import { Request, Response } from "express";
import { container } from "tsyringe";
import ListInfluencerService from "@modules/influencers/services/ListInfluencerService";
import CreateInfluencerService from "@modules/influencers/services/CreateInfluencerService";
import { IInfluencer } from "@modules/influencers/domain/models/IInfluencer";

export default class InfluencerController {
  public async index(request: Request, response: Response): Promise<Response> {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;

    const listInfluencer = container.resolve(ListInfluencerService);
    const influencer = await listInfluencer.execute({ page, limit });

    return response.json(influencer);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const influencer: IInfluencer = request.body;

    const createInfluencer = container.resolve(CreateInfluencerService);
    const customer = await createInfluencer.execute(influencer);

    return response.json(customer);
  }
}
