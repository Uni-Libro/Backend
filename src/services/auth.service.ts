import { compare, hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { SECRET_KEY } from '@config';
import DB from '@databases';
import { CreateUserDto, OTPUserDto, ValidateOTPUserDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { DataStoredInToken, TokenData } from '@interfaces/auth.interface';
import { User } from '@interfaces/users.interface';
import { isEmpty } from '@utils/util';
import { redisDB } from '@databases';
import { sendOTP } from '@/utils/sendSMS';
import { CreateAdminDto } from '@/dtos/admin.dto';
import { Admin } from '@/interfaces/admins.interface';

class AuthService {
  public users = DB.Users;
  public admins = DB.Admin;

  public async login(userData: CreateUserDto): Promise<TokenData> {
    if (isEmpty(userData)) throw new HttpException(400, 'userData is empty');

    const findUser: User = await this.users.findOne({ where: { phone: userData.phone } });
    if (!findUser) throw new HttpException(409, `This username ${userData.phone} was not found`);

    const isPasswordMatching: boolean = await compare(userData.password, findUser.password);
    if (!isPasswordMatching) throw new HttpException(409, 'Password not matching');

    return this.createToken(findUser);
  }

  public async signupAdmin(userData: CreateAdminDto): Promise<Admin> {
    if (isEmpty(userData)) throw new HttpException(400, 'userData is empty');

    const findUserByUsername: Admin = await this.admins.findOne({ where: { username: userData.username } });
    if (findUserByUsername) throw new HttpException(409, `This username ${userData.username} already exists`);

    const hashedPassword = await hash(userData.password, 10);
    const createUserData: Admin = await this.admins.create({ ...userData, password: hashedPassword });

    return createUserData;
  }

  public async adminLogin(userData: CreateAdminDto): Promise<TokenData> {
    if (isEmpty(userData)) throw new HttpException(400, 'userData is empty');
    const findAdmin: Admin = await this.admins.findOne({ where: { username: userData.username } });
    if (!findAdmin) throw new HttpException(409, `This username ${userData.username} was not found`);
    const isPasswordMatching: boolean = await compare(userData.password, findAdmin.password);
    if (!isPasswordMatching) throw new HttpException(409, 'Password not matching');
    return this.createToken(findAdmin, 'admin');
  }

  public async logoutAdmin(userData: Admin): Promise<Admin> {
    if (isEmpty(userData)) throw new HttpException(400, 'userData is empty');

    const findAdmin: Admin = await this.admins.findOne({ where: { username: userData.username, password: userData.password } });
    if (!findAdmin) throw new HttpException(409, "User doesn't exist");

    return findAdmin;
  }

  public async getOTPs(): Promise<Array<Record<string, string>>> {
    const keys = await redisDB.keys('*');
    return Promise.all(
      keys.map(async k => {
        return { [k]: await redisDB.get(k) };
      }),
    );
  }

  public async logout(userData: User): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, 'userData is empty');

    const findUser: User = await this.users.findOne({ where: { phone: userData.phone, password: userData.password } });
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    return findUser;
  }

  //method for sending OTP
  public async sendOTP(userData: OTPUserDto): Promise<void> {
    if (isEmpty(userData)) throw new HttpException(400, 'userData is empty');
    //generate otp
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    //save otp and user phone in redis database
    await redisDB.set(userData.phone, otp, {
      EX: 60 * 2,
    });
    await sendOTP(userData.phone, otp);
  }

  //method for validating OTP
  public async validateOTP(userData: ValidateOTPUserDto): Promise<TokenData> {
    if (isEmpty(userData)) throw new HttpException(400, 'userData is empty');
    const otp = await redisDB.get(userData.phone);
    if (Number(otp) !== Number(userData.otp)) throw new HttpException(401, 'OTP not matching');
    const findUserByUsername: User = await this.users.findOne({ where: { phone: userData.phone } });
    const user = findUserByUsername ? findUserByUsername : await this.users.create({ phone: userData.phone });

    return this.createToken(user);
  }

  public async updatePassword(userData: User, newPassword: string): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, 'userData is empty');
    if (!newPassword) throw new HttpException(400, 'password is too short');
    const hashedPassword = await hash(newPassword, 10);
    this.users.update({ password: hashedPassword }, { where: { phone: userData.phone } });
    return userData;
  }

  public createToken(user: User | Admin, iss = 'user'): TokenData {
    const dataStoredInToken: DataStoredInToken = { id: user.id, iss };
    const secretKey: string = SECRET_KEY;
    const expiresIn: number = 60 * 60 * 24 * 7;

    return { expiresIn, token: sign(dataStoredInToken, secretKey, { expiresIn }) };
  }
}

export default AuthService;
