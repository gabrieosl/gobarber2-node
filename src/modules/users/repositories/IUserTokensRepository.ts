import UserToken from '../infra/typeorm/entities/UserToken';

import User from '@modules/users/infra/typeorm/entities/User';
import ICreateDTO from '../dtos/ICreateUserDTO';

export default interface IUserTokenssRepository {
  generate(user_id: string): Promise<UserToken>;
  findByToken(token: string): Promise<UserToken | undefined>;
}
