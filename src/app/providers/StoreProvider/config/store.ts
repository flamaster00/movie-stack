import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from 'app/providers/StoreProvider/config/ReducerManager';
import { StateSchema } from './StateSchema';

export function createReduxStore(
  initialStore?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialStore,
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
