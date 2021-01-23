import { Request, Response } from 'express';
import { container } from 'tsyringe';


export default class UsersController {
  public async create(request: Request, response: Response) {
    try {
      const { name, email, password } = request.body;

      const createUser = container.resolve(CreateUserService);

      const user = await createUser.execute({
        name,
        email,
        password,
      });

      return response.json(user);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
