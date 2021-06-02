import { combineReducers } from 'redux';
import isLoadingReducer from './isLoadingReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import transactionsReducer from './transactionsReducer';
import userReducer from './userReducer';
import userTotalInboundYieldReducer from './userTotalInboundYieldReducer';

const rootReducer = combineReducers({
  userTotalInboundYield: userTotalInboundYieldReducer,
  transactions: transactionsReducer,
  auth: authReducer,
  user: userReducer,
  isLoading: isLoadingReducer,
  error: errorReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
