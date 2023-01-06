import DB from '@databases';
import { HttpException } from '@exceptions/HttpException';
import { User } from '@interfaces/users.interface';
import { isEmpty } from '@utils/util';
import { Pagination } from '@/interfaces/API.interface';
import { PAGE_SIZE } from '@/config';

class UserService {
  public users = DB.Users;

  public async findAllUser({ limit, page }: Pagination): Promise<{ rows: User[]; count: number }> {
    return await this.users.findAndCountAll({
      limit,
      offset: page ? page * PAGE_SIZE : undefined,
    });
  }

  public async findUserById(userId: number): Promise<User> {
    if (isEmpty(userId)) throw new HttpException(400, 'UserId is empty');

    const findUser: User = await this.users.findByPk(userId);
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    return findUser;
  }

  public async createUser(): Promise<User> {
    throw new HttpException(501, 'Not implemented');
  }

  public async updateUser(): Promise<User> {
    throw new HttpException(501, 'Not implemented');
  }

  public async deleteUser(userId: number): Promise<User> {
    if (isEmpty(userId)) throw new HttpException(400, "User doesn't existId");

    const findUser: User = await this.users.findByPk(userId);
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    await this.users.destroy({ where: { id: userId } });

    return findUser;
  }
}

export default UserService;
