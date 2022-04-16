import { createStore, IStoreModels, IStoreDispatch, IStoreRootState } from 'ice';
import user from '@/models/user';
import layout from '@/models/layout';

interface IAppStoreModels extends IStoreModels {
  user: typeof user;
  layout: typeof layout;
}

const appModels: IAppStoreModels = {
  user,
  layout,
};

export default createStore(appModels, {
  disableImmer: false,
});

export type IRootDispatch = IStoreDispatch<typeof appModels>;
export type IRootState = IStoreRootState<typeof appModels>;
