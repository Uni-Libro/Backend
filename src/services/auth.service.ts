import { compare, hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { SECRET_KEY } from '@config';
import DB from '@databases';
import { CreateUserDto, LoginUserDto, OTPUserDto, ValidateOTPUserDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { DataStoredInToken, TokenData } from '@interfaces/auth.interface';
import { User } from '@interfaces/users.interface';
import { isEmpty, IsPhone } from '@utils/util';
import { isEmail } from 'class-validator';
import { redisDB } from '@databases';

class AuthService {
  public users = DB.Users;

  public async signup(userData: CreateUserDto): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, 'userData is empty');

    const findUserByMail: User = await this.users.findOne({ where: { email: userData.email } });
    if (findUserByMail) throw new HttpException(409, `This email ${userData.email} already exists`);
    const findUserByUsername: User = await this.users.findOne({ where: { username: userData.username } });
    if (findUserByUsername) throw new HttpException(409, `This username ${userData.username} already exists`);

    const hashedPassword = await hash(userData.password, 10);
    const createUserData: User = await this.users.create({ ...userData, password: hashedPassword });

    return createUserData;
  }

  public async login(userData: LoginUserDto): Promise<TokenData> {
    if (isEmpty(userData)) throw new HttpException(400, 'userData is empty');

    const query = isEmail(userData.username) ? 'email' : 'username';
    const findUser: User = await this.users.findOne({ where: { [query]: userData.username } });
    if (!findUser) throw new HttpException(409, `This username ${userData.username} was not found`);

    const isPasswordMatching: boolean = await compare(userData.password, findUser.password);
    if (!isPasswordMatching) throw new HttpException(409, 'Password not matching');

    return this.createToken(findUser);
  }

  public async logout(userData: User): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, 'userData is empty');

    const findUser: User = await this.users.findOne({ where: { email: userData.email, password: userData.password } });
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    return findUser;
  }

  //method for sending OTP
  public async sendOTP(userData: OTPUserDto): Promise<undefined> {
    if (isEmpty(userData) || IsPhone(userData.phone)) throw new HttpException(400, 'userData is empty');
    //generate otp
    const otp = Math.floor(100000 + Math.random() * 900000);
    //save otp and user phone in redis database
    redisDB.set(userData.phone, otp);
    //send otp to user phone
    return null;
  }

  //method for validating OTP
  public async validateOTP(userData: ValidateOTPUserDto): Promise<TokenData> {
    if (isEmpty(userData)) throw new HttpException(400, 'userData is empty');
    //check otp va user phone in redis database
    //if otp is valid, create token and return it
    //if doesn't exist, throw exception
    return null;
  }

  public createToken(user: User): TokenData {
    const dataStoredInToken: DataStoredInToken = { id: user.id };
    const secretKey: string = SECRET_KEY;
    const expiresIn: number = 60 * 60 * 24 * 7;

    return { expiresIn, token: sign(dataStoredInToken, secretKey, { expiresIn }) };
  }
}

export default AuthService;
