import { Request, Response } from "express";
import { container } from "tsyringe";
import ShowProfileService from "@modules/influencers/services/ShowProfileService";
// import UpdateProfileService from '@modules/users/services/UpdateProfileService';
import { instanceToInstance } from "class-transformer";

export default class ProfileController {
  public async show(request: Request, response: Response): Promise<Response> {
    const showProfile = container.resolve(ShowProfileService);
    const id = request.influencer.id;

    const influencer = await showProfile.execute({ id });

    // return response.json(user);
    return response.json(instanceToInstance(influencer));
  }
}
