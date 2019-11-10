import * as actions from '../constants';

const initialState = {
  files: [],
};

export default (state = initialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case actions.ADD_FILE:
      return { ...state, files: [...state.files, payload.file] };

    case actions.REMOVE_FILE:
      const newFiles = state.files.filter(item => item.id !== payload.file.id);
      return { ...state, files: newFiles };

    case 'RESET':
      return initialState;

    default:
      return state;
  };
};