import api from './utils/http';

interface LoginResponse {
  token: string;
}

export async function login(
  email: string,
  password: string
): Promise<LoginResponse> {
  return await api.post(`/login`, {
    email,
    password
  });
}
