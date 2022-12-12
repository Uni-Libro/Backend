import { Request } from 'express';
import { User } from '@interfaces/users.interface';

// user, admin, publisher
type Iss = string;
export interface DataStoredInToken {
  id: number;
  iss: Iss;
}

export interface TokenData {
  token: string;
  expiresIn: number;
}

export interface RequestWithUser extends Request {
  user: User;
  userTokenData: DataStoredInToken;
}
