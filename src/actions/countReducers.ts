export const countReducers = {
    increment: (state: { count: number; }) => {
        state.count += 1;
    },
    decrement: (state: { count: number; }) => {
        state.count -= 1;
    }
};