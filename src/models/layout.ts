import { ModelConfig } from '@ice/store';

interface IState {
  loading: boolean;
}

const layoutModel: ModelConfig<IState> = {
  state: {
    loading: false,
  },
  reducers: {
    setLoading(state) {
      state.loading = true;
      return state;
    },
  },
  effects: () => ({}),
};

export default layoutModel;
