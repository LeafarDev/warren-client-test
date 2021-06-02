import api from './utils/http';
import { IUser } from '../reducers/userReducer';

interface UserResponse {
  user: IUser;
}

export async function fetchUser(): Promise<UserResponse> {
  return await api.get(`http://localhost:3333/api/users/me`);
}
