import api from './utils/http';
import { IUserTotalInboundYield } from '../reducers/userTotalInboundYieldReducer';

interface userTotalInboundYieldResponse {
  userTotalInboundYield: IUserTotalInboundYield;
}

export async function fetchUserTotalInboundYield(): Promise<userTotalInboundYieldResponse> {
  return await api.get(`http://localhost:3333/api/inbounds/yields/total`);
}
