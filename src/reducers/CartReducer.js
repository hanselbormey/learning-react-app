/* export const initialState = {count: 1}; */

export default function CartReducer(state, action) {
    debugger;
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}