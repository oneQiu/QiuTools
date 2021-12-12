/**
 * 低代码模块
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import shortid from 'shortid';
import { CompItem, CompTag } from 'LowCode';
import { CompSet, SidebarItem } from '@/constant/lowCode';

interface MovePayload {
	moveId: string;
	// 来自哪里
	sourceIndex: number;
	// 拖到那里
	destinationIndex: number;
}

export interface LowCodeState {
	build: CompItem[];
}

const initialState: LowCodeState = {
	build: [],
};

export const lowCodeSlice = createSlice({
	name: 'lowCode',
	initialState,
	reducers: {
		// 新增组件
		addComp: (state, { payload }: PayloadAction<CompTag>) => {
			const i = CompSet.find((i) => i.compTag === payload);
			if (i) {
				const comp: CompItem = { id: shortid.generate(), ...i, props: {} };
				state.build.push(comp);
			}
		},
		// 移动组件
		moveComp: (state, { payload }: PayloadAction<MovePayload>) => {
			const { destinationIndex, sourceIndex } = payload;
			state.build.splice(
				destinationIndex,
				0,
				state.build.splice(sourceIndex, 1)[0]
			);
		},
	},
});

export const lowCodeActions = lowCodeSlice.actions;

export default lowCodeSlice.reducer;
