import * as actionTypes from '../constants';

const initialState = {
  files: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.ADD_FILE:
      return { ...state, files: [...state.files, payload.file] };

    case actionTypes.REMOVE_FILE:
      const newFiles = state.files.filter(item => item.id !== payload.file.id);
      return { ...state, files: newFiles };

    case 'RESET':
      return initialState;

    default:
      return state;
  };
};