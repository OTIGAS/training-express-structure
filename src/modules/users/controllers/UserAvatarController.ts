import { Request, Response } from "express";
import UpdateUserAvatarService from "../services/UpdateUserAvatarService";

class UsersAvatarController {
  public async update(req: Request, res: Response): Promise<Response> {
    const updateAvatar = new UpdateUserAvatarService();

    const user = await updateAvatar.execute({
      user_id: req.user.id,
      avatar_filename: req.file.filename,
    });

    return res.json(user);
  }
}

export default UsersAvatarController;
