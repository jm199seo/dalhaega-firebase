import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import reducers from './reducers';

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => {
    if (process.env.NODE_ENV !== 'production') {
      getDefaultMiddleware().push(logger);
    }
    return getDefaultMiddleware();
  },
  devTools: process.env.NODE_ENV !== 'production',
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
