import api from './utils/http';

interface LoginResponse {
  token: string;
}

export async function login(
  email: string,
  password: string
): Promise<LoginResponse> {
  return await api.post(`http://localhost:3333/api/login`, {
    email,
    password
  });
}
