import { getUserInfo } from '@/services/user';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  email: '',
  avatarUrl: '',
};

/**
 * 初始化用户信息
 */
export const fetchUserInfo = createAsyncThunk(
  'user/fetchUserInfo',
  async (userId: number) => {
    const res = await getUserInfo(userId);
    return res.data;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    init(state, action: PayloadAction<Partial<typeof initialState>>) {
      return { ...state, ...action.payload };
    },
  },
  extraReducers(builder) {
    return builder.addCase(fetchUserInfo.fulfilled, (state, action) => {
      return { ...state, ...action.payload };
    });
  },
});

export default userSlice;
