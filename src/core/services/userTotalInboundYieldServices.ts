import api from './utils/http';
import { IUserTotalInboundYield } from '../reducers/userTotalInboundYieldReducer';

interface userTotalInboundYieldResponse {
  userTotalInboundYield: IUserTotalInboundYield;
}

export async function fetchUserTotalInboundYield(): Promise<userTotalInboundYieldResponse> {
  return await api.get(`/inbounds/yields/total`);
}
